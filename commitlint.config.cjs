module.exports = {
	extends: [
		'@commitlint/config-conventional',
	],
	rules: {
		// Disable the body-max-line-length rule for semantic-release
		'body-max-line-length': [0],
		'footer-max-line-length': [0],
		'type-enum': [
			2,
			'always',
			['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
		],
	},
}
