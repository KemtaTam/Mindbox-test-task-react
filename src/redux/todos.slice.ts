import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type StatusType = 'todo' | 'pending' | 'complete'
export type TaskType = {
	id: number
	text: string
	status: StatusType
}
interface TodosState {
	tasks: TaskType[]
	filteredTasks: TaskType[]
}

const initialState: TodosState = {
	tasks: [
		{ id: 1, text: 'asdasdasd', status: 'todo' },
		{ id: 2, text: 'pam', status: 'pending' },
		{ id: 3, text: 'pim', status: 'complete' }
	],
	filteredTasks: []
}

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTask(state, action: PayloadAction<TaskType>) {
			state.tasks = [...state.tasks, action.payload]
			state.filteredTasks = state.tasks
		},
		removeTask(state, action: PayloadAction<number>) {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload)
			state.filteredTasks = state.tasks
		},
		editTaskText(state, action: PayloadAction<{ id: number; text: string }>) {
			state.tasks = state.tasks.map((task) => {
				if (task.id === action.payload.id) task.text = action.payload.text
				return task
			})
			state.filteredTasks = state.tasks
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
			state.filteredTasks = state.tasks
		},
		setFilteredTasks(state) {
			state.filteredTasks = state.tasks
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
