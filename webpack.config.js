var path = require('path');

module.exports = {
    entry: './src/main/js/app.js',
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
    		//in node.js __dirname is the directory in which the currently executing script resides
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        loaders: [
            {
            		//identifies which file(s) should be transformed
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                //trasform it using babel before adding this file to the bundle
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};