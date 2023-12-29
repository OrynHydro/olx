import { FC } from 'react'
import s from './Register.module.scss'
import Field from '@/components/ui/field/Field'
import { TRegisterSchema, registerSchema } from '@/libs/schemas/register.schema'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@/components/ui/button/Button'
import Link from 'next/link'
import axios from 'axios'

const Register: FC = () => {
	const {
		register: formRegister,
		formState: { errors, isValid },
		handleSubmit,
		watch,
	} = useForm<TRegisterSchema>({
		mode: 'onChange',
		resolver: zodResolver(registerSchema),
	})
	const emailValue = watch('email')
	const passwordValue = watch('password')

	const onSubmit: SubmitHandler<TRegisterSchema> = async data => {
		await axios
			.post('/api/auth/register', data)
			.then(res => console.log(res.data))
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
			<span className={s.desc}>
				Створюючи профіль на OLX, ви погоджуєтеся з{' '}
				<Link href={'/'} className='title'>
					Умови користування.
				</Link>
			</span>
			<Button type='submit' disabled={!isValid}>
				Зареєструватися
			</Button>
		</form>
	)
}
export default Register
