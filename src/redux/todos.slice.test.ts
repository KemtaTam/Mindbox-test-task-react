import { todosActions, todosReducer, TodosState } from '../redux/todos.slice'

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
test('text of the first task should be edited', () => {
	const newState = todosReducer(state, todosActions.editTaskText({id: 1, text: "lala"}))
	expect(newState.tasks[0].text).toBe("lala")
})
test('status of the first task should be edited from todo to pending', () => {
	const newState = todosReducer(state, todosActions.editStatus(1))
	expect(newState.tasks[0].status).toBe("pending")
})
