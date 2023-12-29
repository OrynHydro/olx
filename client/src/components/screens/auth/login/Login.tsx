import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import { TLoginSchema, loginSchema } from '@/libs/schemas/login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import s from './Login.module.scss'
import axios from 'axios'

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
	const emailValue = watch('email')
	const passwordValue = watch('password')

	const onSubmit: SubmitHandler<TLoginSchema> = async data => {
		await axios.post('/api/auth/login', data).then(res => console.log(res.data))
	}

	return (
		<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...formRegister('email')}
				label='Електронна пошта'
				error={errors.email?.message}
				value={emailValue}
			/>
			<Field
				{...formRegister('password')}
				label='Пароль'
				error={errors.password?.message}
				value={passwordValue}
			/>
			<Link href={'/'} className='title'>
				Забули пароль?
			</Link>
			<Button type='submit' disabled={!isValid}>
				Увійти
			</Button>
			<span className={s.desc}>
				Під час входу ви погоджуєтеся з нашими{' '}
				<Link href={'/'} className='title'>
					Умови користування.
				</Link>
			</span>
		</form>
	)
}

export default Login
