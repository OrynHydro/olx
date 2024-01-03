'use client'
import { ICategory } from '@/interfaces/category.interface'
import { FC } from 'react'
import s from './CategoryItem.module.scss'
import Image from 'next/image'

interface ICategoryItemProps {
	category: ICategory
	active: ICategory | null
	setActive: (value: ICategory | null) => void
}

const CategoryItem: FC<ICategoryItemProps> = ({
	category,
	active,
	setActive,
}) => {
	const PF = process.env.NEXT_PUBLIC_FOLDER

	return (
		<div
			className={s.category}
			onClick={() => {
				if (category.subcategories) {
					if (active && active.title === category.title) {
						setActive(null)
					} else {
						setActive(category)
					}
				}
			}}
		>
			{category.img && (
				<div
					className={`${s.imgBlock}`}
					style={{ backgroundColor: category.color }}
				>
					<Image
						className='rounded-full'
						src={PF + category.img}
						width={88}
						height={88}
						alt=''
					/>
				</div>
			)}
			<span className='title inline-block w-24 text-center'>
				{category.title}
			</span>
		</div>
	)
}
export default CategoryItem
