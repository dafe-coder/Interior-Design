/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
	future: {},
	theme: {
		screens: {
			...defaultTheme.screens,
			xs: '480px', // phones
			xxl: '1480px', // laptop
		},
		container: {
			center: true,
			screens: {
				'2xl': '1640px', // container width
			},
			padding: {
				DEFAULT: '36px',
				xs: '2rem',
				sm: '2rem',
				lg: '4rem',
				xl: '3.125rem',
				'2xl': '4.375rem',
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
				450: '#525353',
				500: '#4A4A4A',
				800: '#242426',
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
		require('tailwind-hamburgers'),
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
					'@media not all and (min-width: 1480px)': {
						fontSize: '1rem',
						padding: '0 12px',
						height: '2.875rem',
					},
					'@media not all and (min-width: 480px)': {
						letterSpacing: '0%',
						fontSize: '10px',
						padding: '0 8px',
						height: '27px',
						borderRadius: '5px',
					},
				},
				'.button-primary': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '3.625rem',
					minWidth: '17.375rem',
					fontSize: '1.4375rem',
					fontWeight: '500',
					padding: '0 2%',
					color: theme('colors.black'),
					border: `1px solid ${theme('colors.white')}`,
					borderRadius: '1.875rem',
					backgroundColor: theme('colors.apricot[400]'),
					'@media not all and (min-width: 1480px)': {
						height: '3rem',
						fontSize: '1.125rem',
					},
				},
				'.list-decor-item': {
					minHeight: '12.5rem',
					paddingLeft: '4.875rem',
					position: 'relative',
					color: theme('colors.gray[300]'),
					'@media not all and (min-width: 480px)': {
						minHeight: '8.5rem',
					},
					'>strong': {
						fontSize: '1.5rem',
						fontWeight: 700,
						lineHeight: '2.0625rem',
						marginBottom: '0.875rem',
						display: 'block',
						'@media not all and (min-width: 480px)': {
							fontSize: '1.25rem',
							lineHeight: '2.0625rem',
						},
					},
					'>p': {
						fontSize: '1.25rem',
						lineHeight: '2.0625rem',
						'@media not all and (min-width: 480px)': {
							fontSize: '1rem',
							lineHeight: '1rem',
						},
					},
					'&::after': {
						content: '""',
						width: '1px',
						height: 'calc(100% - 54px)',
						backgroundColor: theme('colors.green[300]'),
						position: 'absolute',
						bottom: 0,
						left: '1.25rem',
					},
					'&::before': {
						content: '""',
						width: '2.5rem',
						height: '2.5rem',
						backgroundColor: theme('colors.green[300]'),
						borderRadius: '9999px',
						position: 'absolute',
						top: 0,
						left: 0,
					},
					'&:last-child': {
						'&::after': {
							display: 'none',
						},
					},
				},
				'.input': {
					fontSize: '1.25rem',
					color: theme('colors.gray[500]'),
					outline: 'none',
					borderRadius: '1.875rem',
					backgroundColor: 'transparent',
					fontWeight: 500,
					padding: '0 0.875rem',
					height: '4.125rem',
					border: `1px solid ${theme('colors.gray[500]')}`,
					'@media not all and (min-width: 480px)': {
						fontSize: '14px',
						height: '34px',
						width: '184px',
					},
					'&::placeholder': {
						display: 'none',
						fontSize: '1.25rem',
						color: theme('colors.gray[500]'),
						'@media not all and (min-width: 480px)': {
							fontSize: '14px',
						},
					},
				},
				'.footer-nav': {
					'> ul': {
						flexBasis: '33.333%',
						borderLeft: `0.5px solid ${theme('colors.gray[400]')}`,
						marginBottom: '1.875rem',
						paddingBottom: '1.4375rem',
						minHeight: '127px',
						'@media not all and (min-width: 1480px)': {
							flexBasis: '50%',
						},
						'@media not all and (min-width: 480px)': {
							'&:nth-child(even)': {
								borderLeft: 'none',
							},
						},
						'> *': {
							marginBottom: '0.3125rem',
							'@media not all and (min-width: 480px)': {
								marginBottom: '10px',
							},
						},
						'> li': {
							paddingLeft: '1.25rem',
							fontSize: '1.125rem',
							lineHeight: '1.25rem',
							fontWeight: 500,
							color: theme('colors.gray[300]'),
							'@media not all and (min-width: 480px)': {
								fontSize: '16px',
								lineHeight: '14px',
							},
							'> a': {
								color: theme('colors.gray[500]'),
								'@media not all and (min-width: 480px)': {
									fontSize: '14px',
								},
							},
						},
					},
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
					'@media not all and (min-width: 1480px)': {
						fontSize: '3.3125rem',
						lineHeight: '3.6375rem',
					},
					'@media not all and (min-width: 1024px)': {
						fontSize: '2.25rem',
						lineHeight: '3.0125rem',
					},
					'@media not all and (min-width: 768px)': {
						fontSize: '22px',
						fontWeight: 500,
						lineHeight: '25px',
						letterSpacing: '0%',
					},
				},
				h3: {
					fontSize: '3.125rem',
					lineHeight: '3.4688rem',
					fontWeight: '500',
					letterSpacing: '1%',
					color: theme('colors.gray[300]'),
					'@media not all and (min-width: 1480px)': {
						fontSize: '2.8438rem',
						lineHeight: '3.1563rem',
					},
					'@media not all and (min-width: 1024px)': {
						fontSize: '2.25rem',
						lineHeight: '3.0125rem',
					},
					'@media not all and (min-width: 768px)': {
						fontSize: '22px',
						fontWeight: 500,
						lineHeight: '25px',
						letterSpacing: '0%',
					},
				},
				h5: {
					fontSize: '2.5rem',
					lineHeight: '2.0625rem',
					fontWeight: '900',
					letterSpacing: '1%',
					color: theme('colors.gray[300]'),
					'@media not all and (min-width: 480px)': {
						fontSize: '22px',
						lineHeight: '25px',
					},
				},
				h6: {
					fontSize: '1.875rem',
					lineHeight: '2.125rem',
					marginBottom: '10px',
					fontWeight: '700',
					letterSpacing: '1%',
					color: theme('colors.gray[300]'),
					'@media not all and (min-width: 480px)': {
						fontSize: '22px',
						lineHeight: '25px',
					},
				},
			})
		}),
	],
}
