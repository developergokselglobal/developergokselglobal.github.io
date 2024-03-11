// next.config.js
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
  })
  
  module.exports = withMDX({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.mdx?$/,
        use: ['@mdx-js/loader'],
      })
      return config
    },
  })
  