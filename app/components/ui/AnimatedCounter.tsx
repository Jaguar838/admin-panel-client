import { FC, useCallback, useEffect, useRef } from 'react'
import { animate, motion} from 'framer-motion'
import { FADE_IN } from '@/utils/animation/fade'
import { useInView } from 'react-intersection-observer'

interface IAnimatedCounter {
	from?: number
	to: number
}

const AnimatedCounter: FC<IAnimatedCounter> = ({ to }) => {
	const nodeRef = useRef<HTMLSpanElement>(null)
	const { ref, inView }= useInView({ threshold: 1, triggerOnce: true })
	const from = to * .2

	useEffect(() => {
		if (!inView) return

		const node = nodeRef.current
		const controls = animate(from, to, {
			duration: 2.7,
			delay: .1,
			onUpdate(value) {
				if (node) node.textContent = Math.round(value).toLocaleString()
			}
		})

		return () => controls.stop()
	}, [from, to, inView])

	const setRefs = useCallback(
		(node: HTMLSpanElement) => {
			if (nodeRef) {
				// @ts-ignore
				nodeRef.current = node
			}
			ref(node)
		},
		[ref]
	)
	return <motion.span {...FADE_IN} ref={setRefs} />
}
export default AnimatedCounter