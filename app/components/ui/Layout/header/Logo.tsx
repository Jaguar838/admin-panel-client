import { FC } from 'react'

import css from './Header.module.scss'
import Link from 'next/link'

const Logo: FC = () => {
	return (
		<Link href='/'>
			<div className={css.logo}>Cinema</div>
		</Link>
	)
}

export default Logo