import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type StatusType = 'todo' | 'pending' | 'complete'
export type TaskType = {
	id: number
	text: string
	status: StatusType
}
interface TodosState {
	tasks: TaskType[]
}

const initialState: TodosState = {
	tasks: [
		{ id: 1, text: 'asdasdasd', status: 'todo' },
		{ id: 2, text: 'pam', status: 'pending' },
		{ id: 3, text: 'pim', status: 'complete' }
	]
}

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTask(state, action: PayloadAction<TaskType>) {
			state.tasks = [...state.tasks, action.payload]
		},
		removeTask(state, action: PayloadAction<number>) {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload)
		},
		editTaskText(state, action: PayloadAction<{ id: number; text: string }>) {
			state.tasks = state.tasks.map((task) => {
				if (task.id === action.payload.id) task.text = action.payload.text
				return task
			})
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
		}
	}
})

export const todosActions = todosSlice.actions
export const todosReducer = todosSlice.reducer
