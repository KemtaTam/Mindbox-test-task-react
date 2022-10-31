import { useAppSelector } from '../../hooks/redux'

import { AddTodoForm } from './AddTodoForm/AddTodoForm'
import { TodoElem } from './TodoElem/TodoElem'

import s from './Todos.module.css'

export const Todos = () => {
	const { tasks } = useAppSelector((states) => states.todos)
	const tasksList = tasks.map((task, index) => (
		<TodoElem key={task.id} id={task.id} index={index} text={task.text} status={task.status} />
	))

	return (
		<div className={s.todos}>
			<h1 className={s.h1}>TODOS</h1>
			<AddTodoForm />
			<div className={s.tasksList}>{tasksList}</div>
		</div>
	)
}
