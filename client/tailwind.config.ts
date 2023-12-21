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
		plugin(({ addUtilities, addComponents }) => {
			const generateBorderUtilities = (width: number) => {
				const directions = ['left', 'top', 'right', 'bottom']
				const borderUtilities: Record<string, Record<string, string>> = {}

				directions.forEach(direction => {
					const className = `.border-${direction}-${width}`
					borderUtilities[className] = {
						[`border${direction.charAt(0).toUpperCase()}${direction.slice(
							1
						)}Width`]: `${width}px`,
						[`border${direction.charAt(0).toUpperCase()}${direction.slice(
							1
						)}Style`]: 'solid',
					}
				})
				return borderUtilities
			}

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
				...generateBorderUtilities(1),
				...generateBorderUtilities(2),
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
