/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./stories/**/stories.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},

		plugins: [],

		variants: {
			extends: {
				display: ["group-focus"],
				opacity: ["group-focus"],
				inset: ["group-focus"]
			}
		}
	}
};
