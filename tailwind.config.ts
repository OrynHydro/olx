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
			},
		},
	},
	plugins: [],
}
export default config
