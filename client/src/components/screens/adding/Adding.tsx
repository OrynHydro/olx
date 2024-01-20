'use client'
import { FC, useEffect, useState } from 'react'
import s from './Adding.module.scss'
import { TAddingSchema, addingSchema } from '@/libs/schemas/adding.schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Field from '@/components/ui/field/Field'
import { useAuth } from '@/hooks/useAuth'
import CategoryModal from './category-modal/CategoryModal'
import { LocationData } from '@/helpers/location.data'
import CategoryItem from '@/components/ui/category-item/CategoryItem'
import { categoriesData } from '@/helpers/category.data'

const Adding: FC = () => {
	const user = useAuth()

	const {
		register: formRegister,
		formState: { errors, isValid },
		handleSubmit,
		watch,
		setError,
		reset,
		control,
		setValue,
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

	useEffect(() => {
		if (searchValue) {
			setActiveModal(false)
			setValue('category', searchValue)
		}
	}, [searchValue])

	const selectedCategory = categoriesData.find(
		item => item.title === searchValue?.data.split(' / ')[0]
	)

	return (
		<div className='wrapper'>
			<div className={s.container}>
				<h1 className={s.title}>Створити оголошення</h1>
				<form className={s.main}>
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
						{!searchValue ? (
							<Field
								{...formRegister('category')}
								label='Категорія'
								error={errors.category?.message}
								value={categoryValue?.label || ''}
								placeholder='Виберіть категорію'
								required
								onClick={handleClick}
							/>
						) : (
							<CategoryItem
								category={{
									title: searchValue?.data,
									img: selectedCategory?.img,
									bgColor: selectedCategory?.bgColor,
									color: selectedCategory?.color,
								}}
								activeModal={activeModal}
								setActiveModal={setActiveModal}
								subcategory={searchValue.label}
							/>
						)}
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
				/>
			)}
		</div>
	)
}

export default Adding
