'use client'
import { ICategory } from '@/interfaces/category.interface'
import { FC } from 'react'
import s from './CategoryItem.module.scss'
import Image from 'next/image'

interface ICategoryItemProps {
	category: ICategory
	active?: ICategory | null
	setActive?: (value: ICategory | null) => void
	isModal?: boolean
}

const CategoryItem: FC<ICategoryItemProps> = ({
	category,
	active,
	setActive,
	isModal,
}) => {
	const PF = process.env.NEXT_PUBLIC_FOLDER

	return (
		<div
			className={isModal ? `${s.category} ${s.modal}` : s.category}
			style={{ backgroundColor: isModal ? category.bgColor : '' }}
			onClick={() => {
				if (category.subcategories) {
					if (active && active.title === category.title && setActive) {
						setActive(null)
					} else if (setActive) {
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
						width={isModal ? 48 : 88}
						height={isModal ? 48 : 88}
						alt=''
					/>
				</div>
			)}
			<span
				className={
					isModal
						? 'title inline-block font-normal hover:text-title-hover text-center'
						: 'title inline-block w-24 text-center'
				}
			>
				{category.title}
			</span>
		</div>
	)
}
export default CategoryItem
