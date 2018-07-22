var path = require('path');

module.exports = {
	devtool: 'sourcemaps',
	cache: true,
	debug: true,
	entry: {
		'./src/main/resources/static/built/bundle': './src/main/js/app.js',
		//needed to update the target folder for hot reloading
		'./target/classes/static/built/bundle': './src/main/js/app.js'
	},
	output: {
		path: __dirname,
		//this will be ./src/main/resources/static/built/bundle.js and ./target/classes/static/built/bundle.js directories
		filename: '[name].js'
	},
    module: {
        loaders: [
            {
            	//identifies which file(s) should be transformed
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                //transform it using babel before adding this file to the bundle
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.json$/, loader: 'json' }
        ]
    }
};