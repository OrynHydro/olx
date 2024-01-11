import { FC } from 'react'
import s from './Option.module.scss'
import { OptionProps } from 'react-select'

interface IOption {
	subTitle: string
}

const Option: FC<OptionProps<IOption>> = ({ innerProps, label, data }) => {
	return (
		<div {...innerProps} className={s.option}>
			<h2 className={s.title}>{label}</h2>

			<span className={s.subTitle}>{data.subTitle}</span>
		</div>
	)
}

export default Option
