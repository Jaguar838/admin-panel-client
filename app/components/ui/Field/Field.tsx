import { forwardRef } from 'react'
import { IField } from '@/ui/Field/field.interface'
import css from './Field.module.scss'
import clsx from 'clsx'

const Field = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', style, Icon, ...rest }, ref) => {
		return (
			<div className={clsx(css.input, { [css.withIcon]: !!Icon })} style={style}>
				{Icon && <div className={css.icon}><Icon /></div>}
				<input ref={ref} type={type} {...rest} />
				{error && <div className={css.error}>{error.message}</div>}

			</div>
		)
	}
)
Field.displayName = 'Field'
export default Field