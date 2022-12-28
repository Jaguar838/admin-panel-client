import { motion } from 'framer-motion'
import { FC } from 'react'
import css from './ProgressBar.module.scss'
import { useProgressAnimate } from '@/ui/progress-bar/useProgressAnimate'

const ProgressBar: FC<{ percent: number }> = ({ percent }) => {
	const { variants } = useProgressAnimate(percent)

	return (
		<div className={css.progress}>
			<div className={css.overflow}>
				<motion.div {...variants} className={css.bar} />
			</div>
			<div className={css.percent}>{percent}%</div>
		</div>
	)
}
export default ProgressBar