import { FC, PropsWithChildren } from 'react'
import css from './Heading.module.scss'
import clsx from 'clsx'

const Heading: FC<PropsWithChildren<{ isMargin?: boolean }>> = ({ children, isMargin }) => {
	return (
		<div className={clsx(css.heading, isMargin ? css.margin : '')}>
			{children}
		</div>
	)
}
export default Heading