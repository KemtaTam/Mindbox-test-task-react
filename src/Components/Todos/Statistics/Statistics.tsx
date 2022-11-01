import { useAppSelector } from '../../../hooks/redux'

import s from './Statistics.module.css'

export const Statistics = () => {
	const { tasks } = useAppSelector((state) => state.todos)

	const completeAmount = tasks.filter((task) => task.status === 'complete').length
	const completePercent = (completeAmount / tasks.length) * 100
	debugger

	return (
		<div className={s.statistics}>
			<div className={s.wrapper} style={{ width: completePercent.toString() + '%' }}></div>
			<div className={s.text_wrapper}>
				<div className={s.text}>
					Завершено {completeAmount}/{tasks.length}
				</div>
			</div>
		</div>
	)
}
