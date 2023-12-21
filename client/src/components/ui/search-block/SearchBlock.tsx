'use client'
import { FC, useState } from 'react'
import s from './SearchBlock.module.scss'
import { GoSearch } from 'react-icons/go'
import { IoLocationOutline } from 'react-icons/io5'

const SearchBlock: FC = () => {
	const [activeInput, setActiveInput] = useState<string | null>(null)

	return (
		<div className={s.search}>
			<form
				className={
					activeInput === 'search'
						? `${s.searchForm} ${s.active}`
						: s.searchForm
				}
			>
				<GoSearch fontSize={24} strokeWidth={0.5} />
				<input
					className={s.input}
					placeholder='Що шукаєте?'
					onFocus={() => setActiveInput('search')}
					onBlur={() => setActiveInput(null)}
				/>
			</form>
			<form
				className={
					activeInput === 'city' ? `${s.cityForm} ${s.active}` : s.cityForm
				}
			>
				<IoLocationOutline fontSize={24} strokeWidth={1} />
				<input
					className={s.input}
					placeholder='Уся україна'
					onFocus={() => setActiveInput('city')}
					onBlur={() => setActiveInput(null)}
				/>
			</form>
			<button className={s.button}>
				<span>Пошук</span>{' '}
				<GoSearch className={s.icon} fontSize={24} strokeWidth={0.5} />
			</button>
		</div>
	)
}
export default SearchBlock
