import { FC } from 'react'
import s from './CategoryModal.module.scss'
import { RxCross1 } from 'react-icons/rx'
import { categoriesData } from '@/helpers/category.data'
import CategoryItem from '@/components/ui/category-item/CategoryItem'
import { Control, FieldErrors, UseFormRegister } from 'react-hook-form'
import { TAddingSchema } from '@/libs/schemas/adding.schema'
import Field from '@/components/ui/field/Field'
import { ICategory } from '@/interfaces/category.interface'

interface ICategoryModal {
	active: boolean
	setActive: (active: boolean) => void
	formRegister: UseFormRegister<TAddingSchema>
	errors: FieldErrors<TAddingSchema>
	value: string
	control: Control<any>
}

const CategoryModal: FC<ICategoryModal> = ({
	active,
	setActive,
	formRegister,
	errors,
	value,
	control,
}) => {
	const generateCategoryOptions = (
		categories: ICategory[],
		parentData: string[] = []
	): { value: string; label: string; data: string }[] => {
		let options: { value: string; label: string; data: string }[] = []

		categories.forEach((category, index) => {
			const categoryData = [...parentData, category.title]
			const categoryIndex =
				parentData.length > 0 ? `${parentData.join('-')}-${index}` : `${index}`

			if (!category.subcategories && categoryData.length > 1) {
				const mainCategoryOption = {
					value: categoryIndex,
					label: category.title,
					data: categoryData.slice(0, -1).join(' / '),
				}
				options.push(mainCategoryOption)
			}

			if (category.subcategories) {
				const subcategoryOptions = generateCategoryOptions(
					category.subcategories,
					categoryData
				)
				options = options.concat(subcategoryOptions)
			}
		})

		options.sort((a, b) => a.label.localeCompare(b.label))

		return options
	}

	const categoryOptions = generateCategoryOptions(categoriesData)

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
					<Field
						{...formRegister('category')}
						label='Пошук'
						error={errors.category?.message}
						value={value}
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
									<CategoryItem category={category} isModal />
								</div>
							))}
					</div>
				</div>
			</div>
			<div className={s.overlay} onClick={() => setActive(false)}></div>
		</div>
	)
}

export default CategoryModal
