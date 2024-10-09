const { browser, expect, $, $$ } = require('@wdio/globals')

class ABTest {
  get heading$() { return $('.example h3') }
}

module.exports = new ABTest()