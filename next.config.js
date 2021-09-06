const path = require('path');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
module.exports = withPlugins([[withBundleAnalyzer]], {
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
    async redirects() {
        return [
            {
                source: '/',
                destination: '/portal/posts',
                permanent: true,
            },
        ];
    },
});
