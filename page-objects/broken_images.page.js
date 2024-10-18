const { browser, expect, $, $$ } = require('@wdio/globals')

class BrokenImagesPage {
  get pageHeading$() { return $('.example h3') }
  get images$$() { return $$('.example img') }
}

module.exports = new BrokenImagesPage()