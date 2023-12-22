import { ICategory } from '@/interfaces/category.interface'
import { FC } from 'react'

interface ICategoryItemProps {
	category: ICategory
}

const CategoryItem: FC<ICategoryItemProps> = ({ category }) => {
	return (
		<div>
			{category.title} <img src={category.img} />
		</div>
	)
}
export default CategoryItem
