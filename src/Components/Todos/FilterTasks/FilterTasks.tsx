import { useState } from 'react'
import { useActions } from '../../../hooks/actions'

import s from './FilterTasks.module.css'

export const FilterTasks = () => {
	const { filterTasks } = useActions()
	const [active, setActive] = useState('all')

	return (
		<div className={s.sort}>
			<button className={active === 'all' && s.active} onClick={() =>  {filterTasks('all'); setActive('all')}}>
				All
			</button>
			<button className={active === 'todo' && s.active} onClick={() => {filterTasks('todo'); setActive('todo')}}>
				Todo
			</button>
			<button className={active === 'pending' && s.active} onClick={() => {filterTasks('pending'); setActive('pending')}}>
				Pending
			</button>
			<button className={active === 'complete' && s.active} onClick={() => {filterTasks('complete'); setActive('complete')}}>
				Complete
			</button>
		</div>
	)
}
