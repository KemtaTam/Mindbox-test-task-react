import { todosReducer, todosActions, TodosState } from '../redux/todos.slice'

const state: TodosState = {
	tasks: [
		{ id: 1, text: 'asdasdasd', status: 'todo' },
		{ id: 2, text: 'pam', status: 'pending' },
		{ id: 3, text: 'pim', status: 'complete' }
	],
	filteredTasks: []
}
test('new task should be added', () => {
	const oldLength = state.tasks.length
	const newState = todosReducer(state, todosActions.addTask)
	expect(newState.tasks.length).toBe(oldLength + 1)
})
test('new task should be deleted', () => {
	const oldLength = state.tasks.length
	const newState = todosReducer(state, todosActions.removeTask(1))
	expect(newState.tasks.length).toBe(oldLength - 1)
})
