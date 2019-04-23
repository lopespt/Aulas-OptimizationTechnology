module.exports = {
    mode: 'production',
    output:{
        filename: 'compilado.js'
    },
    entry: './src/main.js',
    module: {
        rules:[
            {
                test: /.*\.js/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
