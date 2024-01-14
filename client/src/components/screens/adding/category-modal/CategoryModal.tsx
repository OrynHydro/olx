import { FC } from 'react'
import s from './CategoryModal.module.scss'
import { RxCross1 } from 'react-icons/rx'
import { categoriesData } from '@/helpers/category.data'
import CategoryItem from '@/components/ui/category-item/CategoryItem'

interface ICategoryModal {
	active: boolean
	setActive: (active: boolean) => void
}

const CategoryModal: FC<ICategoryModal> = ({ active, setActive }) => {
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
