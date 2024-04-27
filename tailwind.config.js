/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
	future: {},
	theme: {
		extend: {},
		colors: {
			...colors,
			green: {
				200: '#B1FFBB',
				400: 'rgba(177, 255, 187, 0.16)',
				500: '#26413A',
				600: '#0B1D22',
			},
			brown: {
				500: '#131313',
			},
			gray: {
				300: '#959595',
				500: '#4A4A4A',
			},
			apricot: {
				400: '#FDD0A1',
			},
		},
	},
	content: ['./**/*.{html,js}'],
	variants: {},
	plugins: [require('tailwindcss'), require('autoprefixer')],
}
