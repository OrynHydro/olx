'use client'
import { ICategory } from '@/interfaces/category.interface'
import { FC } from 'react'
import s from './CategoryItem.module.scss'
import Image from 'next/image'

interface ICategoryItemProps {
	category: ICategory
	active?: ICategory | null
	setActive?: (value: ICategory | null) => void
	activeModal?: boolean
	setActiveModal?: (value: boolean) => void
	subcategory?: string | null
	activeCategories?: ICategory[]
	setActiveCategories?: React.Dispatch<React.SetStateAction<ICategory[]>>
}

const CategoryItem: FC<ICategoryItemProps> = ({
	category,
	active,
	setActive,
	activeModal,
	setActiveModal,
	subcategory,
	activeCategories,
	setActiveCategories,
}) => {
	const PF = process.env.NEXT_PUBLIC_FOLDER

	return (
		<div
			className={setActiveModal ? `${s.category} ${s.modal}` : s.category}
			style={{
				backgroundColor: setActiveModal ? category.bgColor : '',
				width: subcategory ? '480px' : '',
			}}
			onClick={() => {
				if (setActiveCategories) {
					setActiveCategories([category])
				} else if (category.subcategories) {
					if (
						active &&
						active.title === category.title &&
						setActive &&
						!setActiveModal
					) {
						setActive(null)
					} else if (setActive) {
						setActive(category)
					}
				} else if (setActiveModal) {
					setActiveModal(true)
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
						width={setActiveModal ? 48 : 88}
						height={setActiveModal ? 48 : 88}
						alt=''
					/>
				</div>
			)}
			{subcategory ? (
				<>
					<div className={s.chosen}>
						<span className={'title inline-block hover:text-cyan'}>
							{subcategory}
						</span>

						<span
							className={
								'title inline-block text-sm font-normal text-dark-green hover:text-dark-green'
							}
						>
							{category.title}
						</span>
					</div>
					<span className={s.change}>Змінити</span>
				</>
			) : (
				<span
					className={
						setActiveModal
							? 'title inline-block font-normal hover:text-title-hover text-center'
							: 'title inline-block w-24 text-center'
					}
				>
					{category.title}
				</span>
			)}
		</div>
	)
}
export default CategoryItem
