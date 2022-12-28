import { FC } from 'react'
import css from './Switcher.module.scss'
import { useTheme } from '@/hooks/useTheme'
import { BsSquareHalf } from 'react-icons/bs'
import clsx from 'clsx'

const Switcher: FC = () => {
	const { toggleDark, isDarkTheme } = useTheme()
	console.log(isDarkTheme)
	return <button className={clsx(css.button, { [css.light]: !isDarkTheme })} onClick={toggleDark}>
		<BsSquareHalf />
	</button>
}
export default Switcher