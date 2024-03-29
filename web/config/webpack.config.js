/** @returns {import('webpack').Configuration} Webpack Configuration */
module.exports = (config, { mode }) => {
  if (mode === 'development') {
    // Add dev plugin
  }

  // Add custom rules for your project
  // config.module.rules.push(YOUR_RULE)
  config.resolve.fallback = {
    fs: false,
    tls: false,
    net: false,
    stream: false,
    crypto: false,
    os: false,
  }

  // Add custom plugins for your project
  // config.plugins.push(YOUR_PLUGIN)

  return config
}
