import Field from '@/components/ui/field/Field'
import { TLoginSchema, loginSchema } from '@/libs/schemas/login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

const Login: FC = () => {
	const {
		register: formRegister,
		formState: { errors, isValid },
		handleSubmit,
		watch,
	} = useForm<TLoginSchema>({
		mode: 'onChange',
		resolver: zodResolver(loginSchema),
	})
	return (
		<form>
			<Field
				{...formRegister('email')}
				label='Електронна пошта'
				error={errors.email?.message}
				watch={watch}
			/>
			<Field
				{...formRegister('password')}
				label='Пароль'
				error={errors.password?.message}
				watch={watch}
			/>
		</form>
	)
}

export default Login
