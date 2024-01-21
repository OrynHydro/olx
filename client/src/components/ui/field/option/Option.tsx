import { FC } from 'react'
import s from './Option.module.scss'
import { OptionProps } from 'react-select'
import { SetFieldValue } from 'react-hook-form'

export interface IOption {
	data?: string
}

const Option: FC<OptionProps<IOption>> = ({ innerProps, label, data }) => {
	return (
		<div {...innerProps} className={s.option}>
			<h2 className={s.title}>{!data ? label.split(', ')[0] : label}</h2>

			{!data && <span className={s.subTitle}>{label.split(', ')[1]}</span>}

			{data && <span className={s.data}>{data.data}</span>}
		</div>
	)
}

export default Option
