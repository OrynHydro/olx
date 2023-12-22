import { FC } from 'react'
import s from './Home.module.scss'
import SearchBlock from '@/components/ui/search-block/SearchBlock'
import { categoriesData } from '@/helpers/category.data'
import CategoryItem from '@/components/ui/category-item/CategoryItem'

const Home: FC = () => {
	return (
		<div>
			<SearchBlock />
			{categoriesData.map((category, index) => (
				<CategoryItem category={category} key={index} />
			))}
		</div>
	)
}
export default Home
