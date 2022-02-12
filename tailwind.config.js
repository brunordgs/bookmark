module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
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
};
