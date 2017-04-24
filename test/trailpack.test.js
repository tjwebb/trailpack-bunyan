const assert = require('assert')

describe('trailpack-bunyan', () => {
  let pack
  before(() => {
    pack = global.app.packs.bunyan
    assert(pack)
  })
  describe('#validate', () => {
    it.skip('TODO test')
  })
  describe('#configure', () => {
    it.skip('TODO test')
  })
  describe('#initialize', () => {
    it('app.log.silly', () => {
      global.app.log.silly('123')
    })
    it('app.log.debug', () => {
      global.app.log.debug('234')
    })
    it('app.log.info', () => {
      global.app.log.info('345')
    })
    it('app.log.warn', () => {
      global.app.log.warn('456')
    })
    it('app.log.error', () => {
      global.app.log.error('567')
    })
  })
  describe('#unload', () => {
    it.skip('TODO test')
  })
})
