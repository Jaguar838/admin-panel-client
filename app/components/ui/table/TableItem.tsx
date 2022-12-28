import { FC } from 'react'
import { ITableItem } from '@/ui/table/table.interface'
import css from './Table.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineExternalLink, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'

const TableItem: FC<{ item: ITableItem }> = ({ item }) => {
	return <div className={css.item}>
		<div className={css.info}>
			{item.img && (
				<Image src={item.img} alt={item.name} width={40} height={62} />
			)}
			<div>{item.name}</div>
		</div>
		<div className={css.actions}>
			<a
				rel='noreferrer'
				href={item.viewLink}
				target='_blank'
				className='text-primary'>
				<HiOutlineExternalLink />
			</a>
			{item.editLink && (<Link href={item.editLink}>
				<a className='text-blue-500'>
					<HiOutlinePencil />
				</a>
			</Link>)}

			<button onClick={item.removeHandler}>
				<HiOutlineTrash />
			</button>
		</div>
	</div>
}
export default TableItem