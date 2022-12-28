import { FC, PropsWithChildren } from 'react'
import Meta from '@/utils/meta/Meta'

import Header from './header/Header'
import css from './Layout.module.scss'
import { IMeta } from '@/utils/meta/meta.interface'
import Sidebar from '@/ui/Layout/sidebar/Sidebar'
import { useAuth } from '@/hooks/useAuth'

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {

	const { user } = useAuth()

	return (
		<>
			<Meta  {...meta} />
			<section className={user ? css.wrapper : ''}>
				{user && <Sidebar />}
				<div className={user ? css.content : ''}>
					<Header />
					<main className={css.main}>{children}</main>
				</div>
			</section>
		</>
	)
}

export default Layout