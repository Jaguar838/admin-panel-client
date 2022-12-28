import { FC, PropsWithChildren } from 'react'
import css from './Button.module.scss'
import { IButton } from './button.interface'
import clsx from 'clsx'

const Button: FC<PropsWithChildren<IButton>> = ({
																									children,
																									className,
																									...rest
																								}) => {
	return (
		<button className={clsx(css.button, className)}>
			{children}
		</button>
	)
}
export default Button