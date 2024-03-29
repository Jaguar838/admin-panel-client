import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import Heading from '@/ui/heading/Heading'
import Loader from '@/ui/Loader'
import TotalFees from '@/screens/dashboard/main/middle-statistics/total-fees/TotalFees'
import ViewsChart from '@/screens/dashboard/main/middle-statistics/views-chart/ViewsChart'
import css from './MiddleStatistics.module.scss'
import { StatisticsService } from '../../../../../../service/statistics/statistics.service'


const MiddleStatistics: FC = () => {
	const { data, isLoading } = useQuery(['get middle statistics'], () => StatisticsService.getMiddle())
	return (
		<div className='mt-14'>
			<Heading>MiddleStatistics</Heading>

			{isLoading ? (
				<Loader />
			) : data ? (
				<div className={css.wrapper}>
					<TotalFees total={data.totalFees} />
					<ViewsChart data={data.viewsByMonth} />
				</div>
			) : (
				<div>Statistics not found</div>
			)}
		</div>
	)
}
export default MiddleStatistics