const Trailpack = require('trailpack')
const BunyanProxy = require('./lib/BunyanProxy.js')

module.exports = class BunyanTrailpack extends Trailpack {

  configure () {
    if (this.app.config.get('log.level') === 'silly') {
      this.app.config.set('log.level', 'trace')
    }
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })

    this.app.log = new BunyanProxy(this.app.config.log)
  }
}

