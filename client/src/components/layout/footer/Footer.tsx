import { FC } from 'react'
import s from './Footer.module.scss'
import { footerData } from '@/helpers/footer.data'
import Link from 'next/link'

const Footer: FC = () => {
	return (
		<footer className={s.footer}>
			<div className='wrapper'>
				<div className={s.container}>
					{footerData.map(item => (
						<Link key={item.id} className='title' href={`/${item.link}`}>
							{item.title}
						</Link>
					))}
				</div>
			</div>
		</footer>
	)
}
export default Footer
