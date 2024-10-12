const { browser, expect, $, $$ } = require('@wdio/globals')

class DragAndDropPage {
  get columnA() { return $('#column-a') }
  get columnB() { return $('#column-b') }

  
}

module.exports = new DragAndDropPage()