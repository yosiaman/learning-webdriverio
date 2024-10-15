const { browser, expect, $, $$ } = require('@wdio/globals')

class TyposPage {
  get pageHeading$() { return $('.example h3') }
  get paragraphOne$() { return $$('.example p')[0] }
  get paragraphTwo$() { return $$('.example p')[1] }
}

module.exports = new TyposPage()