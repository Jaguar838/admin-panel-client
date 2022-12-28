import css from './TotalFees.module.scss'
import { FC } from 'react'
import ProgressBar from '@/ui/progress-bar/ProgressBar'
import { MdOutlineQueryStats } from 'react-icons/md'
import AnimatedCounter from '@/ui/AnimatedCounter'

const TotalFees: FC<{total:number}> = ({total}) => {
	return (
		<div className={css.fees}>
			<ProgressBar percent={Math.round((total*100)/3000000000)}/>
			<div className={css.icon}>
				<MdOutlineQueryStats/>
			</div>
			<div className={css.name}>Total fees</div>
			<div className={css.total}>
				$<AnimatedCounter to={total}/>
			</div>
		</div>)
		}
		export default TotalFees