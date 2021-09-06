const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    experimental: { granularChunks: true },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'node_modules/flag-icon-css/sass')],
    },
    async rewrites() {
        if (process.env.NODE_ENV === 'development') {
            return [
                {
                    source: '/api/:path*',
                    destination: 'http://localhost:5000/api/:path*',
                },
            ];
        }

        return [];
    },
};
