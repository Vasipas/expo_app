module.exports = {
	env: {
		es6: true,
		node: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'standard-with-typescript'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
	rules: { 'prettier/prettier': 'error' },
};