import { KeyboardEvent, memo,useState } from 'react'

import bin from '../../../assets/images/bin.svg';
import pen from '../../../assets/images/pen.svg';
import { useActions } from '../../../hooks/actions'
import { TaskType } from '../../../redux/todos.slice'

import s from './TodoElem.module.css'

type PropsType = TaskType & {
	index: number
}
export const TodoElem = memo(({ id, index, text, status }: PropsType) => {
	const [editMode, setEditMode] = useState(false)
	const [inputValue, setInputValue] = useState(text)

	const { removeTask, editTaskText, editStatus } = useActions()

	const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			editTaskText({ id, text: inputValue })
			setEditMode(!editMode)
		}
	}
	
	return (
		<div className={s.todo}>
			<div className={s.text} data-status={status}>
				{editMode ? (
					<input
						className={s.input}
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={onKeyDownHandler}
					/>
				) : (
					<>
						<span>{index + 1}</span>.{' '}
						<span>{text}</span>
					</>
				)}
			</div>
			<div className={s.editing_elems}>
				<button className={s.bStatus} data-status={status} onClick={() => editStatus(id)}>
					{status}
				</button>
				<button className={s.bEdit} onClick={() => setEditMode(!editMode)}>
					<img className={s.imgPen} src={pen} alt="en" />
				</button>
				<button className={s.bRemove} onClick={() => removeTask(id)}>
					<img className={s.imgBin} src={bin} alt="bin" />
				</button>
			</div>
		</div>
	)
})
