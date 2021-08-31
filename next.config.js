const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    experimental: { granularChunks: true },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'node_modules/flag-icon-css/sass')],
    },
};
