import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				cyan: '#002f34',
				gray: '#7F9799',
				'opacity-gray': 'rgba(121, 151, 153, 0.3)',
				'light-gray': '#f2f4f5',
			},
			transitionDuration: {
				1000: '1000ms',
			},
		},
	},
	plugins: [],
}
export default config
