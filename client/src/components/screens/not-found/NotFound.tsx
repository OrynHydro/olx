import { FC } from 'react'
import s from './NotFound.module.scss'
import Link from 'next/link'

const NotFoundPage: FC = () => {
	const PF = process.env.NEXT_PUBLIC_FOLDER
	return (
		<div className={s.notFound}>
			<img className={s.image} src={PF + '/notFound.gif'} alt='' />
			<div className={s.container}>
				<h1>Сторінку не знайдено</h1>
				<Link href={'/'}>На головну</Link>
			</div>
		</div>
	)
}
export default NotFoundPage
