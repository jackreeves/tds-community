const { resolve } = require('path')

const config = {
  outputPath: resolve(__dirname, 'output'),
  rootSelector: '#rsg-root',
  tolerance: 0, // percentage
}

const envConfig = {
  development: {
    launchUrl: 'http://localhost:6060',
    healthCheckUrl: 'http://localhost:6060',
  },
}

module.exports = Object.assign(config, envConfig[process.env.APP_ENV || 'development'])
