
/** @type {import('next').NextConfig} */
const nextConfig = {
  // CORRECT syntax for Next.js 16
  experimental: {
    turbo: {
      rules: {
        // Disable problematic file handling
        '*.test.js': { raw: true },
        '*.test.ts': { raw: true },
        '*.test.mjs': { raw: true },
      }
    }
  },
  
  // Remove eslint from here - use .eslintrc.js instead
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  
  // Webpack config to handle remaining issues
  webpack: (config, { isServer }) => {
    const { IgnorePlugin } = require('webpack');
    
    // Ignore specific problematic modules
    config.plugins.push(
      new IgnorePlugin({
        resourceRegExp: /^(why-is-node-running|tap|desm|fastbench|pino-elasticsearch|tape)$/,
      })
    );
    
    return config;
  },
};

module.exports = nextConfig;
