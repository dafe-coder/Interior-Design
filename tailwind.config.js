/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
	future: {},
	theme: {
		container: {
			center: true,
			screens: {
				'2xl': '1640px',
			},
		},
		fontSize: {
			...defaultTheme.fontSize,
		},
		extend: {
			backgroundImage: {
				kitchen: "url('/src/images/kitchen.png')",
			},
			spacing: {
				13: '3.125rem', // 50px
				17: '4.375rem', // 70px
				25: '6.25rem', // 100px
				37: '9.375rem', // 150px
			},
		},
		colors: {
			white: colors.white,
			black: colors.black,
			green: {
				...colors.green,
				200: '#B1FFBB',
				300: '#72AB82',
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
				200: '#E0EAEB',
				300: '#B9C4C5',
				400: '#959595',
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
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		plugin(function ({ addComponents, addBase, theme }) {
			addComponents({
				'.tag': {
					display: 'flex',
					alignItems: 'center',
					height: '3.5rem',
					borderRadius: '10px',
					backgroundColor: 'rgba(177, 255, 187, 0.16)',
					padding: '0 1.0625rem',
					fontWeight: '600',
					fontSize: '1.25rem',
					letterSpacing: '1px',
				},
				'.button-primary': {
					display: 'flex',
					alignItems: 'center',
					height: '3.625rem',
					fontSize: '1.4375rem',
					fontWeight: '500',
					padding: '0 2%',
					color: theme('colors.black'),
					border: `1px solid ${theme('colors.white')}`,
					borderRadius: '1.875rem',
					backgroundColor: theme('colors.apricot[400]'),
				},
				'.list-decor-item': {
					minHeight: '12.5rem',
					paddingLeft: '4.875rem',
					position: 'relative',
				},
			})
			addBase({
				h1: {
					fontSize: '5.625rem',
					lineHeight: '5.0625rem',
					letterSpacing: '5%',
					fontWeight: '700',
				},
				h2: {
					fontSize: '3.9375rem',
					lineHeight: '4.2625rem',
					fontWeight: '500',
					color: theme('colors.gray[200]'),
				},
				h3: {
					fontSize: '3.125rem',
					lineHeight: '3.4688rem',
					fontWeight: '500',
					letterSpacing: '1%',
					color: theme('colors.gray[200]'),
				},
			})
		}),
	],
}
