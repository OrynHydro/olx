'use client'
import { FC, useEffect, useState } from 'react'
import s from './Adding.module.scss'
import { TAddingSchema, addingSchema } from '@/libs/schemas/adding.schema'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Field from '@/components/ui/field/Field'
import { useAuth } from '@/hooks/useAuth'
import CategoryModal from './category-modal/CategoryModal'
import { LocationData } from '@/helpers/location.data'
import CategoryItem from '@/components/ui/category-item/CategoryItem'
import { categoriesData } from '@/helpers/category.data'
import { ICategory } from '@/interfaces/category.interface'
import useCategoryOptions from '@/hooks/useCategoryOptions'
import axios from 'axios'

const Adding: FC = () => {
	const user = useAuth()

	const {
		register: formRegister,
		formState: { errors, isValid },
		handleSubmit,
		watch,
		reset,
		control,
		setValue,
		resetField,
	} = useForm<TAddingSchema>({
		mode: 'onChange',
		resolver: zodResolver(addingSchema),
	})

	const titleValue = watch('title')
	const categoryValue = watch('category')
	const descValue = watch('desc')
	const sellerEmailValue = user?.email ?? ''
	const sellerPhoneValue = watch('sellerPhone')
	const locationValue = watch('location')
	const searchValue = watch('search')
	const photosValue = watch('photos')

	const [sellerNameValue, setSellerNameValue] = useState<string>('')

	useEffect(() => {
		if (user) {
			setSellerNameValue(user.username)
		}
	}, [user])

	useEffect(() => {
		const sellerNameValueWatch = watch('sellerName')
		if (sellerNameValue !== sellerNameValueWatch) {
			setSellerNameValue(sellerNameValueWatch)
		}
	}, [watch('sellerName')])

	if (!user) return

	const [activeModal, setActiveModal] = useState<boolean>(false)

	useEffect(() => {
		if (activeModal) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'unset'
		}
	}, [activeModal])

	const handleClick = () => {
		setActiveModal(true)

		const activeElement = document.activeElement as HTMLInputElement | null
		if (activeElement) {
			activeElement.blur()
		}
	}

	const locationOptions = LocationData.map((location, index) => ({
		value: index,
		label: `${location.city}, ${location.region}`,
	}))

	const [menuSelected, setMenuSelected] = useState<ICategory | undefined>(
		undefined
	)

	useEffect(() => {
		if (searchValue) {
			setActiveModal(false)
			setValue('category', searchValue)

			const category = categoriesData.find(
				item => item.title === searchValue?.data.split(' / ')[0]
			)
			setSelectedCategory(category)
			resetField('search')
		}
	}, [searchValue])

	const { categoryOptions } = useCategoryOptions()

	useEffect(() => {
		if (menuSelected) {
			setActiveModal(false)
			const label = categoryOptions.find(
				item => item.label === menuSelected.title
			)

			const category = {
				value: menuSelected.title,
				label: menuSelected.title,
				data: label?.data || menuSelected.title,
			}

			setValue('category', category)

			const value = categoriesData.find(
				item => item.title === category?.data.split(' / ')[0]
			)
			setSelectedCategory(value)
		}
	}, [menuSelected])

	const [selectedCategory, setSelectedCategory] = useState<
		ICategory | undefined
	>(undefined)

	console.log(photosValue)

	const onSubmit: SubmitHandler<TAddingSchema> = async data => {
		await axios.post('/api/post', data)
	}

	return (
		<div className='wrapper'>
			<div className={s.container}>
				<h1 className={s.title}>Створити оголошення</h1>
				<form className={s.main} onSubmit={handleSubmit(onSubmit)}>
					<div className={s.block}>
						<h2 className={s.title}>Опишіть у подробицях</h2>
						<Field
							{...formRegister('title')}
							label='Вкажіть назву'
							error={errors.title?.message}
							value={titleValue}
							placeholder='Наприклад, iPhone 11 з гарантією'
							required
							adding
						/>
						{!categoryValue ? (
							<Field
								{...formRegister('category')}
								label='Категорія'
								error={errors.category?.message}
								value={categoryValue}
								placeholder='Виберіть категорію'
								required
								onClick={handleClick}
							/>
						) : (
							<div>
								<label>
									<h1 className={s.fieldTitle}>
										Категорія<span>*</span>
									</h1>
								</label>
								<CategoryItem
									category={{
										title: categoryValue?.data,
										img: selectedCategory?.img,
										bgColor: selectedCategory?.bgColor,
										color: selectedCategory?.color,
									}}
									activeModal={activeModal}
									setActiveModal={setActiveModal}
									subcategory={categoryValue.label}
								/>
							</div>
						)}
					</div>
					<div className={s.block}>
						<h2 className={s.title}>Фото</h2>
						<Field
							{...formRegister('photos')}
							label='Перше фото буде на обкладинці оголошення. Перетягніть, щоб змінити порядок фото.'
							error={errors.photos?.message}
							value={
								photosValue &&
								photosValue.name + photosValue.type + ' ' + photosValue.size
							}
							adding
						/>
					</div>
					<div className={s.block}>
						<Field
							{...formRegister('desc')}
							label='Опис'
							error={errors.desc?.message}
							value={descValue}
							placeholder='Подумайте, що ви хотіли би дізнатися з оголошення. І додайте це в опис'
							required
							adding
							control={control}
						/>
					</div>
					<div className={s.block}>
						<Field
							{...formRegister('location')}
							label='Місцезнаходження'
							error={errors.location?.message}
							value={locationValue}
							required
							adding
							control={control}
							options={locationOptions}
							placeholder='Назва міста й індекс'
						/>
					</div>
					<div className={s.block}>
						<h2 className={s.title}>Ваші контактні дані</h2>
						<Field
							{...formRegister('sellerName')}
							label='Контактна особа'
							error={errors.sellerName?.message}
							value={sellerNameValue}
							required
						/>
						<Field
							{...formRegister('sellerEmail')}
							label='Email-адреса'
							error={errors.sellerEmail?.message}
							value={sellerEmailValue}
							disabled
						/>
						<Field
							{...formRegister('sellerPhone')}
							label='Номер телефону'
							error={errors.sellerPhone?.message}
							value={sellerPhoneValue}
						/>
					</div>
					<div className={`${s.block} ${s.right}`}>
						<button>Опублікувати</button>
					</div>
				</form>
			</div>
			{activeModal && (
				<CategoryModal
					active={activeModal}
					setActive={setActiveModal}
					formRegister={formRegister}
					errors={errors}
					value={searchValue}
					control={control}
					setMenuSelected={setMenuSelected}
				/>
			)}
		</div>
	)
}

export default Adding
