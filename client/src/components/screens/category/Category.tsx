'use client'
import { FC, useEffect, useState } from 'react'
import s from './Category.module.scss'
import { usePathname } from 'next/navigation'
import Post from '@/components/ui/post/Post'
import { IPost } from '../../../../../api/models/Post'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Category: FC = () => {
	const currentCategory = usePathname().split('/').slice(2).join('$')

	const [posts, setPosts] = useState<Array<IPost>>([])
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get(`/api/post/fetch_posts/${currentCategory}`)
			setPosts(res.data)
			setLoading(false)
		}

		fetchPosts()
	}, [currentCategory])

	return (
		<div className='wrapper'>
			<div className={s.container}>
				<h1 className={s.title}>Ми знайшли понад {posts.length} оголошень</h1>
				{!loading && posts.length > 0 ? (
					posts.map(post => <Post key={post._id} post={post} />)
				) : loading ? (
					[...Array(8)].map((_, index) => (
						<div key={index} className={s.skeleton}>
							<div className={s.info}>
								<Skeleton height={152} width={216} />
								<div className={s.data}>
									<h2 className='title'>
										<Skeleton width={310} />
									</h2>
									<p className={s.text}>
										<Skeleton width={260} />
									</p>
								</div>
							</div>
						</div>
					))
				) : (
					<h1>Поки що у даній категорії немає оголошень</h1>
				)}
			</div>
		</div>
	)
}

export default Category
