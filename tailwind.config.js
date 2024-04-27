/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	future: {},
	theme: {
		container: {
			center: true,
		},
		extend: {
			backgroundImage: {
				kitchen: "url('./src/images/kitchen.png')",
			},
		},
		colors: {
			white: colors.white,
			green: {
				...colors.green,
				200: '#B1FFBB',
				400: 'rgba(177, 255, 187, 0.16)',
				500: '#26413A',
				600: '#0B1D22',
			},
			brown: {
				...colors.brown,
				500: '#131313',
			},
			gray: {
				...colors.gray,
				300: '#959595',
				500: '#4A4A4A',
			},
			apricot: {
				400: '#FDD0A1',
			},
		},
	},
	fontFamily: {
		roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
	},
	content: ['./**/*.{html,js}'],
	variants: {},
	plugins: [require('tailwindcss'), require('autoprefixer')],
}
