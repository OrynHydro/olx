import { FC, useState } from 'react'
import s from './CategoryModal.module.scss'
import { RxCross1 } from 'react-icons/rx'
import { categoriesData } from '@/helpers/category.data'
import CategoryItem from '@/components/ui/category-item/CategoryItem'
import { Control, FieldErrors, UseFormRegister } from 'react-hook-form'
import { TAddingSchema } from '@/libs/schemas/adding.schema'
import Field from '@/components/ui/field/Field'
import { ICategory } from '@/interfaces/category.interface'
import { IoChevronForward } from 'react-icons/io5'
import useCategoryOptions from '@/hooks/useCategoryOptions'

interface ICategoryModal {
	active: boolean
	setActive: (active: boolean) => void
	formRegister: UseFormRegister<TAddingSchema>
	errors: FieldErrors<TAddingSchema>
	value: { value: string; data: string; label: string } | undefined
	control: Control<any>
	setMenuSelected: React.Dispatch<React.SetStateAction<ICategory | undefined>>
}

const CategoryModal: FC<ICategoryModal> = ({
	active,
	setActive,
	formRegister,
	errors,
	value,
	control,
	setMenuSelected,
}) => {
	const { categoryOptions } = useCategoryOptions()

	const [activeCategories, setActiveCategories] = useState<ICategory[]>([])

	const handleCategoryClick = (category: ICategory, level: number) => {
		setActiveCategories(prevCategories => {
			const updatedCategories = prevCategories.slice(0, level)
			if (!category.subcategories) {
				setMenuSelected(category)
				setActive(false)
			}
			return [...updatedCategories, category]
		})
	}

	const renderCategories = (
		categories: ICategory[] | undefined,
		level: number
	) => {
		return categories?.map((category, index) => (
			<div
				className={
					activeCategories[level] &&
					activeCategories[level].title === category.title
						? `${s.category} ${s.active}`
						: s.category
				}
				key={index}
				onClick={() => handleCategoryClick(category, level)}
			>
				<span>{category.title}</span>
				{category.subcategories && <IoChevronForward />}
			</div>
		))
	}

	return (
		<div className={s.modal}>
			<div className={s.block}>
				<div className={s.container}>
					<div className={s.top}>
						<h1 className={s.title}>Виберіть категорію</h1>
						<RxCross1
							className={s.cross}
							fontSize={20}
							strokeWidth={0.75}
							onClick={() => setActive(false)}
						/>
					</div>
					{activeCategories.length === 0 ? (
						<>
							<Field
								{...formRegister('search')}
								label='Пошук'
								error={errors.search?.message}
								value={value?.label || ''}
								placeholder='Пошук'
								control={control}
								options={categoryOptions}
							/>
							<div className={s.categories}>
								{categoriesData
									.filter(
										category =>
											category.title !== 'Віддам безкоштовно' &&
											category.title !== 'Обмін'
									)
									.map((category, index) => (
										<div key={index}>
											<CategoryItem
												category={category}
												activeModal={active}
												setActiveModal={setActive}
												activeCategories={activeCategories}
												setActiveCategories={setActiveCategories}
											/>
										</div>
									))}
							</div>
						</>
					) : (
						<div className={s.menu}>
							<div className={s.column}>
								{renderCategories(
									categoriesData.filter(
										category =>
											category.title !== 'Віддам безкоштовно' &&
											category.title !== 'Обмін'
									),
									0
								)}
							</div>

							<div className={s.column}>
								{renderCategories(activeCategories[0].subcategories, 1)}
							</div>

							<div className={s.column}>
								{activeCategories[1] &&
									renderCategories(activeCategories[1]?.subcategories, 2)}
							</div>

							{activeCategories[2] && (
								<div className={s.column}>
									{renderCategories(activeCategories[2]?.subcategories, 3)}
								</div>
							)}
						</div>
					)}
				</div>
			</div>
			<div className={s.overlay} onClick={() => setActive(false)}></div>
		</div>
	)
}

export default CategoryModal
