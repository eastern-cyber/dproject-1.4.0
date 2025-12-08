/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: undefined, // Disable turbopack
  
  experimental: {
    turbo: {
      root: __dirname, // Explicit root
    },
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  webpack: (config) => {
    const { IgnorePlugin } = require('webpack');
    
    config.plugins.push(
      new IgnorePlugin({
        resourceRegExp: /[\\/]thread-stream[\\/]/,
      })
    );
    
    return config;
  },
};

module.exports = nextConfig;