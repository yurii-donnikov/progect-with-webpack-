const path = require('path')

module.exports = {
    entry: {
        main: './src/index'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
//            {
//                test: /\.css$/,
//                use: [
//               'style-loader',
//               'css-loader'
//            ]
//         }
            {
                test: /\.s[ac]ss$/i,
                use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      ]
    }
}
