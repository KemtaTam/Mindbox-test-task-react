import { useAppSelector } from "../../hooks/redux";

import { TodoElem } from "./TodoElem/TodoElem";

import s from './Todos.module.css'

export const TodosList = () => {
	const { filteredTasks } = useAppSelector((states) => states.todos)

	const tasksList = filteredTasks.map((task, index) => (
		<TodoElem key={task.id} id={task.id} index={index} text={task.text} status={task.status} />
	))

	return ( 
		<div className={s.tasksList}>{tasksList}</div>
	 );
}