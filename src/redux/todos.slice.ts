import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

export type StatusType = 'todo' | 'pending' | 'complete'
export type TaskType = {
	id: number
	text: string
	status: StatusType
}
export interface TodosState {
	tasks: TaskType[]
	filteredTasks: TaskType[]
}

const initialWithoutLocal = JSON.stringify([
	{ id: 1, text: 'asdasdasd', status: 'todo' },
	{ id: 2, text: 'pam', status: 'pending' },
	{ id: 3, text: 'pim', status: 'complete' }
])

const setFilteredAndLocalStorage = (state: Draft<TodosState>) => {
	state.filteredTasks = state.tasks
	localStorage.setItem('tasks', JSON.stringify(state.tasks))
}
const initialState: TodosState = {
	tasks: JSON.parse(localStorage.getItem('tasks') ?? initialWithoutLocal),
	filteredTasks: JSON.parse(localStorage.getItem('tasks') ?? initialWithoutLocal)
}

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTask(state, action: PayloadAction<TaskType>) {
			state.tasks = [...state.tasks, action.payload]
			setFilteredAndLocalStorage(state)
		},
		removeTask(state, action: PayloadAction<number>) {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload)
			setFilteredAndLocalStorage(state)
		},
		editTaskText(state, action: PayloadAction<{ id: number; text: string }>) {
			state.tasks = state.tasks.map((task) => {
				if (task.id === action.payload.id) task.text = action.payload.text
				return task
			})
			setFilteredAndLocalStorage(state)
		},
		editStatus(state, action: PayloadAction<number>) {
			state.tasks = state.tasks.map((task) => {
				if (task.id === action.payload) {
					switch (task.status) {
						case 'todo':
							task.status = 'pending'
							break
						case 'pending':
							task.status = 'complete'
							break
						case 'complete':
							task.status = 'todo'
							break
					}
				}
				return task
			})
			setFilteredAndLocalStorage(state)
		},
		filterTasks(state, action: PayloadAction<StatusType | 'all'>) {
			if (action.payload === 'all') {
				state.filteredTasks = state.tasks
			} else {
				state.filteredTasks = state.tasks.filter((task) => task.status === action.payload)
			}
		}
	}
})

export const todosActions = todosSlice.actions
export const todosReducer = todosSlice.reducer
