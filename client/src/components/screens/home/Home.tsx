'use client'
import { FC, useState } from 'react'
import s from './Home.module.scss'
import SearchBlock from '@/components/ui/search-block/SearchBlock'
import { categoriesData } from '@/helpers/category.data'
import CategoryItem from '@/components/ui/category-item/CategoryItem'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa6'
import { ICategory } from '@/interfaces/category.interface'
import { useRouter } from 'next/navigation'

const Home: FC = () => {
	const [active, setActive] = useState<ICategory | null>(null)

	const router = useRouter()
	return (
		<div className='wrapper'>
			<SearchBlock />
			<div className={s.categoriesBlock}>
				<h1 className={s.title}>Розділи на сервісі OLX</h1>
				<div className={s.categories}>
					{categoriesData.map((category, index) => (
						<div
							onClick={() =>
								!category.subcategories && router.push(category.link)
							}
						>
							<CategoryItem
								active={active}
								setActive={setActive}
								category={category}
								key={index}
							/>
						</div>
					))}
				</div>

				{active && (
					<div className={s.subcategoryBlock}>
						<Link href={active.link} className={s.title}>
							<FaChevronRight />
							<span className='title'>Переглянути всі оголошення</span>{' '}
							<span className={s.categoryTitle}> в {active.title}</span>
						</Link>
						<hr className={s.hr} />
						{active.subcategories && active.subcategories.length > 0 && (
							<div className={s.subcategories}>
								{active.subcategories.map((subcategory, index) => (
									<Link
										className={s.title}
										href={`${active.link}${subcategory.link}`}
										key={index}
									>
										<FaChevronRight />
										<span className='title font-normal text-sm'>
											{subcategory.title}
										</span>
									</Link>
								))}
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	)
}
export default Home
