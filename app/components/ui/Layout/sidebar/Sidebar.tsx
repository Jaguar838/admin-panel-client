import { FC } from 'react'
import css from './Sidebar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { menu } from '@/ui/Layout/sidebar/menu.data'
import Switcher from '@/ui/Switcher/Switcher'
import clsx from 'clsx'

const Sidebar: FC = () => {
	const { asPath } = useRouter()
	return (
		<aside className={css.sidebar}>
			<div>
				<Link href='/'>
					<a className={css.logo}>R</a>
				</Link>
				<nav className={css.menu}>
					<ul>
						{menu.map(item => (
							<li className={clsx(css.item, {
								[css.active]: item.link === asPath
							})} key={item.link}>
								<Link href={item.link}>
									<a>
										<item.Icon />
									</a>
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<Switcher />
			</div>

		</aside>)
}
export default Sidebar