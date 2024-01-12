import { FC } from 'react'
import s from './Option.module.scss'
import { OptionProps } from 'react-select'

const Option: FC<OptionProps> = ({ innerProps, label }) => {
	return (
		<div {...innerProps} className={s.option}>
			<h2 className={s.title}>{label.split(', ')[0]}</h2>

			<span className={s.subTitle}>{label.split(', ')[1]}</span>
		</div>
	)
}

export default Option
