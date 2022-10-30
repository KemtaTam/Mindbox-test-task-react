module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['tsconfig.json']
	},
	plugins: ['react', 'prettier', 'simple-import-sort'],
	rules: {
		'react/react-in-jsx-scope': 0,
		'@typescript-eslint/no-unused-vars': 'warn',
		'no-console': 'warn',
		'@typescript-eslint/explicit-function-return-type': 0,

		'import/order': 0,
		'simple-import-sort/exports': 1,
		'simple-import-sort/imports': [
			1,
			{
				groups: [
					// External packages.
					['^'],
					// Internal packages.
					['^@'],
					// Side effect imports.
					['^\\u0000'],
					// Parent imports.
					['^\\.\\.(?!/?$)', '^\\.\\./?$'],
					// Other relative imports.
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
					// Style imports.
					['^.+\\.s?css$']
				]
			}
		]
	}
}
