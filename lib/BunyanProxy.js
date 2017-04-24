const bunyan = require('bunyan')

const BunyanProxyHandler = {
  get (target, key) {
    if (key === 'silly') {
      return target.trace
    }
    else {
      return target[key]
    }
  }
}

module.exports = class BunyanProxy {
  constructor (config) {
    this.logger = bunyan.createLogger(config)

    return new Proxy(this.logger, BunyanProxyHandler)
  }
}
