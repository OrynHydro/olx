import React from 'react'
import Select from 'react-select'
import { useController, FieldValues, FieldPath, Control } from 'react-hook-form'
import { LocationData } from '@/helpers/location.data'
import Option from '../option/Option'

import { IoSearchSharp } from 'react-icons/io5'

interface CustomSelectProps<TFieldValues extends FieldValues = FieldValues> {
	name: FieldPath<TFieldValues>
	control: Control<any>
	options: Array<{ value: string | number; label: string; data?: string }>
	placeholder?: string
}

const CustomSelect = <TFieldValues extends FieldValues = FieldValues>({
	name,
	control,
	options,
	placeholder,
}: CustomSelectProps<TFieldValues>) => {
	const { field } = useController({
		name,
		control,
	})

	const customStyles = {
		clearIndicator: (provided: any) => ({
			...provided,
			display: 'none',
		}),
		dropdownIndicator: (provided: any) => ({
			...provided,
			display: 'none',
		}),
		indicatorSeparator: (provided: any) => ({
			...provided,
			display: 'none',
		}),
	}

	return (
		<div>
			<IoSearchSharp className='relative z-30 top-8 left-3' fontSize={20} />
			<Select
				{...field}
				options={options}
				placeholder={placeholder}
				components={{ Option: Option }}
				filterOption={(option, inputValue) =>
					option.label
						.split(', ')[0]
						.toLowerCase()
						.includes(inputValue.toLowerCase())
				}
				styles={{
					...customStyles,
					control: (baseStyles, state) => ({
						...baseStyles,
						width: placeholder === 'Назва міста й індекс' ? '368px' : '320px',
						height: '48px',
						background: '#f2f4f5',
						cursor: 'text',
						border: 0,
						borderBottom: state.isFocused
							? '2px solid rgb(0, 47, 52)'
							: '2px solid transparent',
						borderRadius: 0,
						boxShadow: 'none',
						transition: '0s',
						paddingLeft: '32px',

						':hover': {
							borderColor: state.isFocused ? 'rgb(0, 47, 52)' : 'transparent',
						},
					}),
				}}
			/>
		</div>
	)
}

export default CustomSelect
