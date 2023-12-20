import { FC } from 'react'
import s from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FiMessageCircle } from 'react-icons/fi'
import { CiHeart, CiUser } from 'react-icons/ci'

const Header: FC = () => {
	return (
		<div className={s.header}>
			<div className='wrapper'>
				<div className={s.container}>
					<Image width={71} height={41} src={'/images/logo/logo.svg'} alt='' />
					<nav className={s.nav}>
						<Link href={'#'} className={s.message}>
							<FiMessageCircle className={s.icon} fontSize={22} />
							<span>Повідомлення</span>
						</Link>
						<Link href={'#'} className={s.favourite}>
							<CiHeart fontSize={22} strokeWidth={1} />
						</Link>
						<Link href={'#'} className={s.profile}>
							<CiUser fontSize={22} className={s.icon} strokeWidth={1} />
							<span>Ваш профіль</span>
						</Link>
						<Link href={'#'} className={s.adding}>
							Додати оголошення
						</Link>
					</nav>
				</div>
			</div>
		</div>
	)
}
export default Header
