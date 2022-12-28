export interface ITableItem {
	id: number
	img?: string
	name: string
	viewLink: string
	editLink?: string
	removeHandler: () => void
}

