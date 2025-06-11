const path = require('path');

module.exports = {
    entry: './src/app.ts',
    mode: 'production',
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve:{
        extensions: ['.ts','.tsx','.js']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'publicacao/')
    }
};
