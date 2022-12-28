const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./app/components/**/*.{js,jsx,ts,tsx}'
	],
	darkMode: 'class',
	theme: {
		fontSize: {
			'xs': '.75rem',
			'sm': '.875rem',
			'tiny': '.875rem',
			'base': '1rem',
			'lg': '1.125rem',
			'xl': '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem'
		},
		extend: {
			colors: {
				primary: '#5f3df7',
				black: '#222',
				purple: '#6c5ecf',
				'light-blue': '#32a8e2',
				gray: {
					400: '#9898ad',
					500: '#68687b',
					600: '#58586b',
					800: '#353348',
					900: '#272532'
				}
			},
			boxShadow: {
				DEFAULT: '0 3px 12px rgba(0, 0, 0, 0.03)',
				md: '0 3px 12px rgba(0, 0, 0, 0.1)'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			transitionDuration: {
				DEFAULT: '250ms'
			},
			keyframes: {
				fade: {
					from: { opasity: 0 },
					to: { opasity: 1 }
				}
			}
		}
	},
	plugins: [
		plugin(({ addUtilities, addComponents }) => {
			addComponents({
				'.shadow-icons': {
					display: 'flex',
					padding: '0.4rem',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '2rem',
					transition: 'box-shadow .4s ease-in-out',
					boxShadow: '0 4px 10px rgba(45, 8, 125, 0.2)',
					color: '#353538',
					backgroundColor: '#fff',
					borderRadius: '50%',
					'&:hover': {
						boxShadow: '0 4px 16px rgba(45, 8, 125, 0.25)'
					}
				}
			})
			addUtilities({
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				},
				'.flex-center-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}
			})
		})
	]
}