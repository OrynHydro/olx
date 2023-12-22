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
	return (
		<div
			className={s.category}
			onClick={() =>
				setActive(
					active
						? active.title === category.title
							? null
							: category
						: category
				)
			}
		>
			{category.img && (
				<div
					className={`${s.imgBlock}`}
					style={{ backgroundColor: category.color }}
				>
					<Image
						className='rounded-full'
						src={category.img}
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
