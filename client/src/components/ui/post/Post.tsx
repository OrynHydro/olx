import { FC } from 'react'
import s from './Post.module.scss'
import { IPost } from '../../../../../api/models/Post'
import moment from 'moment'

interface PostProps {
	post: IPost
}

const Post: FC<PostProps> = ({ post }) => {
	const PF = process.env.NEXT_PUBLIC_FOLDER
	function formatDate(inputDate: Date) {
		const date = moment(inputDate)

		const today = moment().startOf('day')
		const yesterday = moment().subtract(1, 'day').startOf('day')

		if (date.isSame(today, 'day')) {
			return `Сьогодні о ${date.format('HH:mm')}`
		} else if (date.isSame(yesterday, 'day')) {
			return `Вчора о ${date.format('HH:mm')}`
		} else {
			return date.format('DD MMMM YYYY') + ' р.'
		}
	}
	return (
		<div className={s.post}>
			<div className={s.info}>
				<img className={s.image} alt='' src={PF + `storage/${post.photos}`} />
				<div className={s.data}>
					<h2 className='title'>{post.title}</h2>
					<p className={s.text}>
						{post.location} - {post?.createdAt && formatDate(post?.createdAt)}
					</p>
				</div>
			</div>
			<div className={s.price}>
				{post.price === 'обмін'
					? 'Обмін'
					: post.price === '0'
					? 'Безкоштовно'
					: post.price + ' грн'}
			</div>
		</div>
	)
}

export default Post
