import React from 'react'
import Select from 'react-select'
import { useController, FieldValues, FieldPath, Control } from 'react-hook-form'
import { LocationData } from '@/helpers/location.data'
import Option from '../option/Option'

interface CustomSelectProps<TFieldValues extends FieldValues = FieldValues> {
	name: FieldPath<TFieldValues>
	control: Control<any>
}

const CustomSelect = <TFieldValues extends FieldValues = FieldValues>({
	name,
	control,
}: CustomSelectProps<TFieldValues>) => {
	const { field } = useController({
		name,
		control,
	})

	const locationOptions = LocationData.map((location, index) => ({
		value: index,
		label: `${location.city}, ${location.region}`,
	}))

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
		<Select
			{...field}
			options={locationOptions}
			placeholder='Назва міста й індекс'
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
					width: '368px',
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

					':hover': {
						borderColor: state.isFocused ? 'rgb(0, 47, 52)' : 'transparent',
					},
				}),
			}}
		/>
	)
}

export default CustomSelect
