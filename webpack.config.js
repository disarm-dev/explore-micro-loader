const path = require('path');
const workboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const DIST_DIR = 'dist';

module.exports = { /* Do the usual webpack stuff. */
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, DIST_DIR),
    },
    plugins: [ /* Call the plugin. */
        new HtmlWebpackPlugin(),
        new ScriptExtHtmlWebpackPlugin({
            inline: ['bundle.js']
        }),
        new CopyWebpackPlugin([
            { from: './src/another.json' },
            { from: './src/instance.json' },
            { from: './src/dummy.js' },
        ]),
        new workboxPlugin({
            globDirectory: DIST_DIR,
            globPatterns: ['**/dummy.{html,js,css}'],
            swDest: path.join(DIST_DIR, 'sw.js'),
        })
    ]
};