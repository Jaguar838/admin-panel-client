import { FC } from 'react'
import { IStatisticsItem } from '@/ui/statistic-item/statistics-item.interface'
import css from './StatisticsItem.module.scss'
import AnimatedCounter from '@/ui/AnimatedCounter'
import { getIcon } from '@/ui/statistic-item/statistics.util'
import clsx from 'clsx'

const StatisticsItem: FC<{ item: IStatisticsItem }> = ({ item }) => {
	const Icon = getIcon(item.id)
	return (
		<div className={clsx(css.item, css[`color_${item.id}`])}>
			<div className={css.icon}>
				< Icon />
			</div>
			<div className={css.name}>{item.name}</div>
			<div className={css.value}>
				<AnimatedCounter to={item.value} />
				{item.value}</div>
		</div>
	)
}
export default StatisticsItem