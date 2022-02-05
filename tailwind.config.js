const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
		},
		colors: {
			...colors,
			'bookmark-purple': '#5267df',
			'bookmark-red': '#fa5959',
			'bookmark-blue': '#242a45',
			'bookmark-gray': '#9194a2',
			'bookmark-white': '#f7f7f7',
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				lg: '1124px',
				xl: '1124px',
				'2xl': '1124px',
			},
		},
  },
  plugins: [],
}
