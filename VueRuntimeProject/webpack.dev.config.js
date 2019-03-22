const path = require("path");

module.exports = {
    entry: {
        main: './Src/IndexPage/Scripts/index.js'
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./wwwroot"), //dont need dist, root is the equivalent
        publicPath: "/wwwroot/" //must have both slashes
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", "css-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }
            }
        ]
    },
    plugins: [

    ],
    resolve: {
        extensions: [".vue", ".js", ".css", ".json"], //files are imported (using import) as .js by default, so if you want to import something that is not .js you must specify here
        alias: {
            "vue$": "vue/dist/vue.esm.js" //does more than allow vue es6, it also has a template compiler
        }
    }
};
