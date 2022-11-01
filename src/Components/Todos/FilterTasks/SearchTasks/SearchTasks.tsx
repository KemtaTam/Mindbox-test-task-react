import { useState } from 'react'

import { useActions } from '../../../../hooks/actions'

import s from './SearchTasks.module.css'

export const SearchTasks = () => {
	const [searchValue, setSearchValue] = useState('')

	const { searchTasks } = useActions()

	const searchHandler = (inputValue: string) => {
		setSearchValue(inputValue)
		searchTasks(inputValue.toLowerCase())
	}

	return (
		<input
			className={s.search}
			value={searchValue}
			onChange={(e) => searchHandler(e.target.value)}
			placeholder="Search..."
		/>
	)
}
