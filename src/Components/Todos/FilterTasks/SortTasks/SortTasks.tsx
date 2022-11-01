import { useState } from 'react'

import { useActions } from '../../../../hooks/actions'

export const SortTasks = () => {
	const [optionValue, setOptionValue] = useState('')
	const { sortTasks } = useActions()

	const sortHandler = (option: string) => {
		setOptionValue(option)
		sortTasks({sortBy: "text", option})
	}

	return (
		<select value={optionValue} onChange={(e) => sortHandler(e.target.value)}>
			<option value="" disabled>
				Sort by
			</option>
			<option value="a-z">A-Z</option>
			<option value="z-a">Z-A</option>
		</select>
	)
}
