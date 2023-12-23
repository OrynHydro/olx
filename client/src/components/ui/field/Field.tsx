import { InputHTMLAttributes, forwardRef } from 'react'
import ErrorText from './error-text/ErrorText'
import s from './Field.module.scss'
import { UseFormWatch } from 'react-hook-form'
import { TLoginSchema } from '@/libs/schemas/login.schema'
import { CiCircleAlert } from 'react-icons/ci'
import { IoMdCheckmark } from 'react-icons/io'

interface IField
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
	label: string
	error?: string
	watch: UseFormWatch<TLoginSchema>
}

const Field = forwardRef<HTMLInputElement, IField>(function Comp(
	{ label, error, required, watch, ...rest },
	ref
) {
	const fieldValiue = watch(label === 'Електронна пошта' ? 'email' : 'password')
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
				/>
				{fieldValiue && !error ? (
					<IoMdCheckmark
						className={s.icon}
						fontSize={28}
						color='#3de7de'
						strokeWidth={0.5}
					/>
				) : (
					error && (
						<CiCircleAlert
							className={s.icon}
							fontSize={28}
							color='#ff4d4f'
							strokeWidth={0.5}
						/>
					)
				)}
			</div>

			<ErrorText>{error}</ErrorText>
		</div>
	)
})
export default Field
