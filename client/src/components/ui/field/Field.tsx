'use client'
import { InputHTMLAttributes, forwardRef, useState } from 'react'
import ErrorText from './error-text/ErrorText'
import s from './Field.module.scss'
import { UseFormWatch } from 'react-hook-form'
import { TLoginSchema } from '@/libs/schemas/login.schema'
import { CiCircleAlert } from 'react-icons/ci'
import { IoMdCheckmark } from 'react-icons/io'
import { FiEye } from 'react-icons/fi'
import { FiEyeOff } from 'react-icons/fi'

interface IField
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
	label: string
	error?: string
	value: string
}

const Field = forwardRef<HTMLInputElement, IField>(function Comp(
	{ label, error, required, value, ...rest },
	ref
) {
	const [hind, setHind] = useState<boolean>(false)
	const [hover, setHover] = useState<boolean>(false)
	return (
		<div className={s.field}>
			<label>
				<h1 className={s.title}>{label}</h1>
			</label>
			<div className={s.inputBlock}>
				<input
					className={error ? `${s.input} ${s.error}` : s.input}
					{...rest}
					ref={ref}
					type={label ? (!hind ? 'password' : 'text') : 'email'}
				/>
				<div className={s.icons}>
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
					{value && !error ? (
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
			</div>

			<ErrorText>{error}</ErrorText>
		</div>
	)
})
export default Field
