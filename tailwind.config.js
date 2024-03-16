/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			margin: {
				"-100": "-25rem", // -400px if 1rem = 16px
				"-104": "-26rem", // -416px if 1rem = 16px
				// Add more as needed
			},
			animation: {
				vibrate: "vibrate 0.1s linear 0s 20",
			},
		},
	},
	plugins: [],
};
