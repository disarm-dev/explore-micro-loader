const path = require('path');
const workboxPlugin = require('workbox-webpack-plugin');

const DIST_DIR = 'dist';

module.exports = { /* Do the usual webpack stuff. */
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, DIST_DIR),
    },
    plugins: [ /* Call the plugin. */
        new workboxPlugin({
            globDirectory: DIST_DIR,
            globPatterns: ['**/*.{html,js,css}'],
            swDest: path.join(DIST_DIR, 'sw.js'),
        }),
    ]
};