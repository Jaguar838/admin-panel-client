import { IStatisticsItem } from '@/ui/statistic-item/statistics-item.interface'
import { IMiddleStatisticsResponse } from './statistics.interface'
import instance from '../../api/interceptor'

export let StatisticsService = {

	async getMain() {
		return instance
			.get<IStatisticsItem[]>('/statistics/main')
			.then(({ data }) => data)
	},

	async getMiddle() {
		return instance
			.get<IMiddleStatisticsResponse>('/statistics/middle')
			.then(({ data }) => data)
	}
}
