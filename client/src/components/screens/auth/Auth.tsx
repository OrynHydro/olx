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
	const verify = get('verify')
	return (
		<div className={s.auth}>
			<div className={s.form}>
				{!verify && (
					<div className={s.switch}>
						<Link
							href='/auth?tab=login'
							className={
								tab === 'login' || tab === null
									? `${s.item} ${s.active}`
									: s.item
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
				)}

				{(tab === 'login' || tab === null) && !verify ? (
					<Login />
				) : (
					<Register verification={verify} />
				)}
			</div>
		</div>
	)
}
export default Auth
