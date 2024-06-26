'use client'
import { InputHTMLAttributes, forwardRef, useState } from 'react'
import ErrorText from './error-text/ErrorText'
import s from './Field.module.scss'
import { CiCircleAlert } from 'react-icons/ci'
import { IoMdCheckmark } from 'react-icons/io'
import { FiEye } from 'react-icons/fi'
import { FiEyeOff } from 'react-icons/fi'
import { Control, Controller } from 'react-hook-form'
import CustomSelect from './select/Select'

interface IField
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
	label: string
	error?: string
	value: string
	verificationCode?: string | null
	required?: boolean
	placeholder?: string
	adding?: boolean
	control?: Control<any>
	disabled?: boolean
	options?: Array<{ value: string | number; label: string; data?: string }>
}

const Field = forwardRef<HTMLInputElement, IField>(function Comp(
	{
		label,
		error,
		required,
		value,
		placeholder,
		adding,
		control,
		disabled,
		options,
		...rest
	},
	ref
) {
	const [hind, setHind] = useState<boolean>(false)
	const [hover, setHover] = useState<boolean>(false)

	// console.log(value)

	return (
		<div
			className={placeholder === 'Пошук' ? `${s.field} ${s.search}` : s.field}
		>
			<div className={adding ? `${s.top} ${s.adding}` : s.top}>
				{label !== 'Пошук' && (
					<label>
						<h1 className={s.title}>
							{label}
							{required && <span>*</span>}
						</h1>
					</label>
				)}

				{label === 'Опис' && (
					<span className={s.counter}>{value?.length || 0}/9000</span>
				)}
			</div>

			<div
				className={
					disabled
						? `${s.inputBlock} ${s.disabled}`
						: adding
						? label === 'Опис'
							? `${s.inputBlock} ${s.adding} ${s.textarea}`
							: label === 'Місцезнаходження'
							? s.inputBlock
							: `${s.inputBlock} ${s.adding}`
						: s.inputBlock
				}
			>
				{control ? (
					label === 'Опис' ? (
						<Controller
							name='desc'
							control={control}
							render={({ field }) => (
								<textarea
									className={s.input}
									{...field}
									placeholder={placeholder}
									maxLength={9000}
								/>
							)}
						/>
					) : (
						options && (
							<Controller
								name={label === 'Місцезнаходження' ? 'location' : 'search'}
								control={control}
								render={({ field }) => (
									<CustomSelect
										name={field.name}
										control={control}
										options={options}
										placeholder={placeholder}
									/>
								)}
							/>
						)
					)
				) : label ===
				  'Перше фото буде на обкладинці оголошення. Перетягніть, щоб змінити порядок фото.' ? (
					<>
						<input
							className={error ? `${s.input} ${s.error}` : s.input}
							{...rest}
							ref={ref}
							type={'file'}
						/>
						{error ? error : ''}
					</>
				) : (
					<input
						className={
							error
								? `${s.input} ${s.error}`
								: label === 'Категорія'
								? `${s.input} ${s.category}`
								: s.input
						}
						{...rest}
						ref={ref}
						type={
							label === 'Пароль'
								? !hind
									? 'password'
									: 'text'
								: label === 'Електронна пошта'
								? 'email'
								: 'text'
						}
						placeholder={placeholder}
						value={value || ''}
						disabled={disabled}
					/>
				)}

				{!disabled && label !== 'Пошук' && (
					<div
						className={label === 'Опис' ? `${s.icons} ${s.textarea}` : s.icons}
					>
						{label === 'Пароль' &&
							(hind ? (
								<FiEyeOff
									className={s.hind}
									onClick={() => setHind(false)}
									onMouseOver={() => setHover(true)}
									onMouseOut={() => setHover(false)}
									fontSize={24}
									color={hover ? '#002F34' : '#406367'}
								/>
							) : (
								<FiEye
									className={s.hind}
									onClick={() => setHind(true)}
									onMouseOver={() => setHover(true)}
									onMouseOut={() => setHover(false)}
									fontSize={24}
									color={hover ? '#002F34' : '#406367'}
								/>
							))}
						{value &&
						!error &&
						label !==
							'Перше фото буде на обкладинці оголошення. Перетягніть, щоб змінити порядок фото.' ? (
							<IoMdCheckmark
								className={s.icon}
								fontSize={24}
								color='#3de7de'
								strokeWidth={0.5}
							/>
						) : (
							error && (
								<CiCircleAlert
									className={s.icon}
									fontSize={24}
									color='#ff4d4f'
									strokeWidth={0.5}
								/>
							)
						)}
					</div>
				)}
			</div>

			<ErrorText>{error}</ErrorText>
		</div>
	)
})
export default Field
