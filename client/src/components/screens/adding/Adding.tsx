'use client'
import { FC, useEffect, useState } from 'react'
import s from './Adding.module.scss'
import { TAddingSchema, addingSchema } from '@/libs/schemas/adding.schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Field from '@/components/ui/field/Field'
import { useAuth } from '@/hooks/useAuth'

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
	} = useForm<TAddingSchema>({
		mode: 'onChange',
		resolver: zodResolver(addingSchema),
	})

	const titleValue = watch('title')
	const descValue = watch('desc')
	const sellerEmailValue = user?.email ?? ''
	const sellerPhoneValue = watch('sellerPhone')
	const locationValue = watch('location')

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
		</div>
	)
}

export default Adding
