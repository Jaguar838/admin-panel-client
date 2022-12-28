import { FC } from 'react'
import Heading from '@/ui/heading/Heading'
import StatisticsItem from '@/ui/statistic-item/StatisticsItem'
import Loader from '@/ui/Loader'
import { useQuery } from '@tanstack/react-query'
import { StatisticsService } from '../../../../../service/statistics/statistics.service'
import { IStatisticsItem } from '@/components/ui/statistic-item/statistics-item.interface'


const MainStatistics: FC = () => {
	const { data, isLoading } = useQuery(['get main statistics'], () => StatisticsService.getMain())

	return (
		<div>
			<Heading>Main Statistics</Heading>
			{isLoading ? <Loader /> : data?.length ?
				(<div className='grid grid-cols-4 gap-8'>
					{
						data?.map((item: IStatisticsItem) =>
							<StatisticsItem
								item={item}
								key={item.id}
							/>
						)
					}
				</div>) : (<div>Statistics not found</div>)
			}
		</div>
	)
}
export default MainStatistics