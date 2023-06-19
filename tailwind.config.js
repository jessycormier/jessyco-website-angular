const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	darkMode: 'media', //false or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				text: 'text 16s ease infinite'
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '2000% 2000%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '2000% 2000%',
						'background-position': 'right center'
					}
				}
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			gray: {
				50: '#f2f3f2',
				100: '#e5e6e6',
				200: '#cacecd',
				300: '#b0b5b3',
				400: '#959d9a',
				500: '#7b8481',
				600: '#626a67',
				700: '#4a4f4d',
				800: '#202322',
				900: '#191a1a'
			},
			blue: colors.blue,
			amber: colors.amber,
			green: colors.green,
			slate: colors.slate,
			red: colors.red,
			yellow: colors.yellow,
			indigo: colors.indigo,
			purple: colors.purple,
			white: colors.white,
			black: colors.black
		}
	},
	plugins: [require('@tailwindcss/typography')]
}

