import { useAppSelector } from '../../hooks/redux'

import { AddTodoForm } from './AddTodoForm/AddTodoForm'
import { FilterTasks } from './FilterTasks/FilterTasks'
import { TodoElem } from './TodoElem/TodoElem'

import s from './Todos.module.css'

export const Todos = () => {
	const { filteredTasks } = useAppSelector((states) => states.todos)

	const tasksList = filteredTasks.map((task, index) => (
		<TodoElem key={task.id} id={task.id} index={index} text={task.text} status={task.status} />
	))

	return (
		<div className={s.todos}>
			<h1 className={s.h1}>TODOS</h1>
			<AddTodoForm />
			<FilterTasks />
			<div className={s.tasksList}>{tasksList}</div>
		</div>
	)
}
