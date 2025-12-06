/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force disable Turbopack
  experimental: {
    turbo: false,
  },
  
  // Remove eslint from config (moved to separate eslintrc file)
  
  // Ignore TypeScript errors temporarily
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Webpack configuration to exclude problematic files
  webpack: (config, { isServer }) => {
    // Ignore thread-stream test files
    config.module.rules.push({
      test: /[\\/]node_modules[\\/]pino[\\/]node_modules[\\/]thread-stream[\\/]test[\\/]/,
      loader: 'ignore-loader',
    });
    
    // Ignore specific dev dependencies
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'why-is-node-running': false,
      'tap': false,
      'desm': false,
      'fastbench': false,
      'pino-elasticsearch': false,
      'tape': false,
    };
    
    // Exclude problematic license file
    config.module.rules.push({
      test: /[\\/]pino[\\/]node_modules[\\/]thread-stream[\\/]LICENSE$/,
      loader: 'ignore-loader',
    });
    
    return config;
  },
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force disable Turbopack
  experimental: {
    turbo: false,
  },
  
  // Remove eslint from config (moved to separate eslintrc file)
  
  // Ignore TypeScript errors temporarily
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Webpack configuration to exclude problematic files
  webpack: (config, { isServer }) => {
    // Ignore thread-stream test files
    config.module.rules.push({
      test: /[\\/]node_modules[\\/]pino[\\/]node_modules[\\/]thread-stream[\\/]test[\\/]/,
      loader: 'ignore-loader',
    });
    
    // Ignore specific dev dependencies
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'why-is-node-running': false,
      'tap': false,
      'desm': false,
      'fastbench': false,
      'pino-elasticsearch': false,
      'tape': false,
    };
    
    // Exclude problematic license file
    config.module.rules.push({
      test: /[\\/]pino[\\/]node_modules[\\/]thread-stream[\\/]LICENSE$/,
      loader: 'ignore-loader',
    });
    
    return config;
  },
};

module.exports = nextConfig;
