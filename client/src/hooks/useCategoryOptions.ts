import { useEffect, useState } from 'react'
import { ICategory } from '@/interfaces/category.interface'
import { categoriesData } from '@/helpers/category.data'

interface ICategoryOption {
	value: string
	label: string
	data: string
}

const useCategoryOptions = () => {
	const [categoryOptions, setCategoryOptions] = useState<ICategoryOption[]>([])

	useEffect(() => {
		const generateCategoryOptions = (
			categories: ICategory[],
			parentData: string[] = []
		): ICategoryOption[] => {
			let options: ICategoryOption[] = []

			categories.forEach((category, index) => {
				const categoryData = [...parentData, category.title]
				const categoryIndex =
					parentData.length > 0
						? `${parentData.join('-')}-${index}`
						: `${index}`

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

		const options = generateCategoryOptions(categoriesData)
		setCategoryOptions(options)
	}, [])

	return { categoryOptions }
}

export default useCategoryOptions
