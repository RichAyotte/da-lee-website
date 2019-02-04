module.exports = {
	env: {
		browser: true
		, node: true
	}
	, parser: 'babel-eslint'
	, parserOptions: {
		sourceType: 'module'
	}
	, plugins: [
		'html'
	]
	, root: true
	, settings: {
		'import/resolver': {
			'babel-module': {
				"root": ["./"]
				, "alias": {
					"~": "./"
					, "~~": "./"
					, "assets": "./assets"
					, "static": "./static"
				}
				, "extensions": [
					".js"
					, ".vue"
				]
			}
		}
	}
}
