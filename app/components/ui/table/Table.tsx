import { FC } from 'react'
import { ITableItem } from '@/ui/table/table.interface'
import Loader from '@/ui/Loader'
import TableItem from '@/ui/table/TableItem'
import css from './Table.module.scss'

const Table: FC<{ items: ITableItem[], isLoading: boolean }> = ({ items, isLoading }) => {
	return (
		<div className={css.table}>
			{isLoading ? <Loader count={3} /> : items.length ? items.map(item => <TableItem item={item} key={item.id} />) :
				<div>Items not found</div>}
		</div>)
}
export default Table