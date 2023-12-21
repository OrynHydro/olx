import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')
import plugin from 'tailwindcss/plugin'

const constants = {
	cyan: '#002f34',
	gray: 'rgba(121, 151, 153, <alpha-value>)',
	'light-gray': '#f2f4f5',
}

const config: Config = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			transparent: colors.transparent,
			white: colors.white,
			...constants,
		},
		extend: {
			minHeight: {
				main: 'calc(100vh - 249px)',
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities, addComponents }) {
			addUtilities({
				'.transition-200': {
					transition: '0.2s ease-in-out',
				},
				'.transition-1000': {
					transition: '1s linear',
				},
				'.content-empty': {
					content: "''",
				},
				'.border-left': {
					borderLeftWidth: '1px',
					borderLeftStyle: 'solid',
				},
				'.border-top': {
					borderTopWidth: '1px',
					borderTopStyle: 'solid',
				},
				'.border-right': {
					borderRightWidth: '1px',
					borderRightStyle: 'solid',
				},
				'.border-bottom': {
					borderBottomWidth: '1px',
					borderBottomStyle: 'solid',
				},
				'.border-left-2': {
					borderLeftWidth: '2px',
					borderLeftStyle: 'solid',
				},
				'.border-top-2': {
					borderTopWidth: '2px',
					borderTopStyle: 'solid',
				},
				'.border-right-2': {
					borderRightWidth: '2px',
					borderRightStyle: 'solid',
				},
				'.border-bottom-2': {
					borderBottomWidth: '2px',
					borderBottomStyle: 'solid',
				},
			})
			addComponents({
				'.title': {
					fontSize: '16px',
					fontWeight: '600',
					lineHeight: '20px',
					color: constants.cyan,
					transition: '0.2s ease-in-out',
					'&:hover': {
						color: '#00338A',
						textDecoration: 'underline',
					},
				},
			})
		}),
	],
}
export default config
