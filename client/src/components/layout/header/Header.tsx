import { FC, useEffect } from 'react'
import s from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FiMessageCircle } from 'react-icons/fi'
import { CiHeart, CiUser } from 'react-icons/ci'
import { useAuth } from '@/hooks/useAuth'

const Header: FC = () => {
	const user = useAuth()
	const PF = process.env.NEXT_PUBLIC_FOLDER
	return (
		<header className={s.header}>
			<div className='wrapper'>
				<div className={s.container}>
					<Image width={71} height={41} src={PF + '/logo/logo.svg'} alt='' />
					<nav className={s.nav}>
						<Link href={!user ? '/auth?tab=login' : ''} className={s.message}>
							<FiMessageCircle className={s.icon} fontSize={22} />
							<span>Повідомлення</span>
						</Link>
						<Link href={!user ? '/auth?tab=login' : ''} className={s.favourite}>
							<CiHeart fontSize={22} strokeWidth={1} />
						</Link>
						<Link href={!user ? '/auth?tab=login' : ''} className={s.profile}>
							<CiUser fontSize={22} className={s.icon} strokeWidth={1} />
							<span>Ваш профіль</span>
						</Link>
						<Link href={!user ? '/auth?tab=login' : ''} className={s.adding}>
							Додати оголошення
						</Link>
					</nav>
				</div>
			</div>
		</header>
	)
}
export default Header
