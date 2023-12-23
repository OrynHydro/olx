'use client'
import { FC } from 'react'
import s from './Auth.module.scss'
import { useSearchParams } from 'next/navigation'
import Login from './login/Login'
import Register from './register/Register'
import Link from 'next/link'

const Auth: FC = () => {
	const get = useSearchParams().get
	const tab = get('tab')
	return (
		<div className={s.auth}>
			<div className={s.form}>
				<div className={s.switch}>
					<Link
						href='/auth?tab=login'
						className={
							tab === 'login' || tab === null ? `${s.item} ${s.active}` : s.item
						}
					>
						Увійти
					</Link>
					<Link
						href={'/auth?tab=register'}
						className={tab === 'register' ? `${s.item} ${s.active}` : s.item}
					>
						Зареєструватися
					</Link>
				</div>
				{tab === 'login' || tab === null ? <Login /> : <Register />}
			</div>
		</div>
	)
}
export default Auth
