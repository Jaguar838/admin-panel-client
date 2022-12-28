import { FC } from 'react'
import css from './ViewsChart.module.scss'
import { IViewsByMonth } from '../../../../../../../service/statistics/statistics.interface'
import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, Tooltip } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { options } from '@/screens/dashboard/main/middle-statistics/views-chart/chart.options'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)


const ViewsChart: FC<{ data: IViewsByMonth[] }> = ({ data }) => {

	return <div className={css.chart}>
		<Bar options={options as any} data={
			{
				labels: data.map(item => item.month),
				datasets: [
					{
						label: 'Dataset 1',
						data: data.map(item => item.views),
						backgroundColor: '#7A94FE'
					}
				]
			}} />
	</div>
}
export default ViewsChart