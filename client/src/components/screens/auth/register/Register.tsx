'use client'
import { FC, useEffect, useState } from 'react'
import s from './Register.module.scss'
import Field from '@/components/ui/field/Field'
import { TRegisterSchema, registerSchema } from '@/libs/schemas/register.schema'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@/components/ui/button/Button'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { IoChevronBack } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/user/userSlice'

const Register: FC<{ verification: string | null }> = ({ verification }) => {
	const {
		register: formRegister,
		formState: { errors, isValid },
		handleSubmit,
		watch,
		setError,
		reset,
	} = useForm<TRegisterSchema>({
		mode: 'onChange',
		resolver: zodResolver(registerSchema),
	})
	const emailValue = watch('email')
	const passwordValue = watch('password')
	const verificationValue = watch('verification')

	const [verificationCode, setVerificationCode] = useState<string | null>(null)

	const dispatch = useDispatch()

	const onSubmit: SubmitHandler<TRegisterSchema> = async data => {
		if (!verificationCode) {
			try {
				const res = await axios.post('/api/mailgun/', { receiver: data.email })
				setVerificationCode(res.data)
			} catch (error) {
				console.error(error)
			}
		} else if (verificationCode === verificationValue) {
			try {
				const user = await axios.post('/api/auth/register', data)
				dispatch(setUser(user.data))
				reset()
				router.push('/')
			} catch (error) {
				console.error(error)
			}
		} else {
			setError('verification', {
				type: 'manual',
				message: 'Неправильний код підтвердження',
			})
		}
	}

	const router = useRouter()

	useEffect(() => {
		if (verification && !emailValue) router.push('/auth?tab=register')
	}, [verification])

	return (
		<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
			{!verification ? (
				<>
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
					<Button
						onClick={() => router.push('/auth?verify=true')}
						disabled={!!errors.email?.message || !!errors.password?.message}
					>
						Зареєструватися
					</Button>
				</>
			) : (
				<div className={s.verification}>
					<div className={s.top}>
						<Link className={s.link} href={'/auth?tab=register'}>
							<IoChevronBack className={s.chevron} fontSize={24} />
						</Link>
						<h1 className={s.title}>Підтвердити код</h1>
					</div>
					<div className={s.mid}>
						<span className={s.title}>
							Нам потрібно переконатися, що це дійсно ви. Введіть код
							підтвердження, який ми надіслали вам на електронну пошту{' '}
							<span className={s.email}>{emailValue}</span>
						</span>
						<Field
							{...formRegister('verification')}
							label='Код підтвердження'
							error={errors.verification?.message}
							value={verificationValue || ''}
						/>
						<Button type='submit' disabled={!isValid}>
							Підтвердити код
						</Button>
					</div>
				</div>
			)}
		</form>
	)
}
export default Register
