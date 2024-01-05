'use client'
import { FC, useEffect, useState } from 'react'
import s from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FiMessageCircle } from 'react-icons/fi'
import { CiHeart, CiUser } from 'react-icons/ci'
import { useAuth } from '@/hooks/useAuth'
import { HeaderProfileData } from '@/helpers/header-profile.data'
import axios from 'axios'

const Header: FC = () => {
	const user = useAuth()
	const PF = process.env.NEXT_PUBLIC_FOLDER
	const [showDropdown, setShowDropdown] = useState<boolean>(false)

	const logout = async (type: string) => {
		if (type !== 'button') return
		try {
			await axios.post('/api/auth/logout').then(res => {
				if (res.data === 'Success') {
					window.location.reload()
					window.location.href = '/'
				}
			})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<header className={s.header}>
			<div className='wrapper'>
				<div className={s.container}>
					<Link href='/'>
						<Image width={71} height={41} src={PF + '/logo/logo.svg'} alt='' />
					</Link>

					<nav className={s.nav}>
						<Link
							href={!user ? '/auth?tab=login' : '/myaccount/answers'}
							className={s.message}
						>
							<FiMessageCircle className={s.icon} fontSize={22} />
							<span>Повідомлення</span>
						</Link>
						<Link
							href={!user ? '/auth?tab=login' : '/favorites/search'}
							className={s.favourite}
						>
							<CiHeart fontSize={22} strokeWidth={1} />
						</Link>
						{!user ? (
							<Link href={'/auth?tab=login'} className={s.profile}>
								<CiUser fontSize={22} className={s.icon} strokeWidth={1} />
								<span>Ваш профіль</span>
							</Link>
						) : (
							<div
								className={s.profile}
								onMouseOver={() => user && setShowDropdown(true)}
								onMouseOut={() => user && setShowDropdown(false)}
							>
								<CiUser fontSize={22} className={s.icon} strokeWidth={1} />
								<span>Ваш профіль</span>
								<ul
									className={
										showDropdown ? `${s.dropdown} ${s.active}` : s.dropdown
									}
								>
									<div className={s.container}>
										<li className={s.user}>
											<Image
												src={PF + 'noAvatar.svg'}
												alt=''
												width={40}
												height={40}
											/>
											<span className={s.username}>{user?.username}</span>
										</li>
										{HeaderProfileData.map((item, index) => (
											<li
												key={index}
												className={
													item.type === 'title'
														? s.title
														: item.type === 'button'
														? `${s.button} ${s.item}`
														: s.item
												}
												onClick={() => logout(item.type)}
											>
												{item.type === 'title' ? (
													item.text
												) : item.type !== 'button' &&
												  typeof item.link !== 'undefined' ? (
													<Link
														href={
															item.type === 'counter'
																? item.link
																: `/myaccount${item.link}`
														}
													>
														{item.text}
													</Link>
												) : (
													<button>{item.text}</button>
												)}
											</li>
										))}
									</div>
								</ul>
							</div>
						)}

						<Link
							href={!user ? '/auth?tab=login' : '/adding'}
							className={s.adding}
						>
							Додати оголошення
						</Link>
					</nav>
				</div>
			</div>
		</header>
	)
}
export default Header
