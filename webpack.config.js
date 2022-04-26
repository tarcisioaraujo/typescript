const path = require('path');

module.exports = {
    entry:"./src/classes_interfaces.ts",
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
        filename: 'classes_interfaces.js',
        path: path.resolve(__dirname, 'producao/')
    }
}
  