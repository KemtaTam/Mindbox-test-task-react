import { AddTodoForm } from './AddTodoForm/AddTodoForm'
import { FilterTasks } from './FilterTasks/FilterTasks'
import { Statistics } from './Statistics/Statistics'
import { TodosList } from './TodosList'

import s from './Todos.module.css'

export const Todos = () => {
	return (
		<div className={s.container}>
			<div className={s.todos}>
				<h1 className={s.h1}>TODOS</h1>
				<AddTodoForm />
				<FilterTasks />
				<TodosList />
				<Statistics />
			</div>
		</div>
	)
}
