import { KeyboardEvent, useState } from 'react'

import { useActions } from '../../../hooks/actions'

import s from './AddTodoForm.module.css'

export const AddTodoForm = () => {
	const [todoText, setTodoText] = useState('')
	const { addTask } = useActions()

	const onClickHandler = (e: any) => {
		e.preventDefault()
		if (todoText.trim() !== '') {
			addTask({ id: Date.now(), text: todoText, status: 'todo' })
		}
		setTodoText('')
	}
	const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			if (todoText.trim() !== '') addTask({ id: Date.now(), text: todoText, status: 'todo' })
			setTodoText('')
		}
	}

	return (
		<form className={s.form}>
			<input
				className={s.input}
				value={todoText}
				onChange={(e) => setTodoText(e.target.value)}
				onKeyDown={onKeyDownHandler}
				placeholder="Add a task..."
			/>
			<button className={s.button} onClick={onClickHandler}>
				Add
			</button>
		</form>
	)
}
