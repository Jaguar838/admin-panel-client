import { MotionProps, Variants } from 'framer-motion'

export const FADE_IN: MotionProps={
	initial: {opacity: 0},
	whileInView: {opacity: 1},
	viewport: {once:true},
	transition: {duration: 1.4}
}

export const authFormAnimation:Variants ={
	open: {
scale:1,
		opacity:1,
	transition: {
		type: 'spring',
		stiffness: 80,
		damping: 8
	}},
	closed:{
		scale: 0.3,
		opacity:0,
		transition: {
			type: 'spring',
			stiffness: 80,
			damping: 8
		}}
}