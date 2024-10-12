const { browser, expect, $, $$ } = require('@wdio/globals')

class DragAndDropPage {
  get columnA() { return $('#column-a') }
  get columnB() { return $('#column-b') }
  get columnAHeader() { return $('#column-a header') }
  get columnBHeader() { return $('#column-b header') }

  async dragBoxAToColumnB() {
    await this.columnA.waitForClickable()
    await this.columnB.waitForDisplayed({timeout:3000})
    await this.columnA.dragAndDrop(await this.columnB)
  }

  async dragBoxAToCoordinateColumnB(x, y) {
    await this.columnA.waitForClickable()
    await this.columnB.waitForDisplayed({timeout:3000})
    await this.columnA.dragAndDrop({x:x, y:y})
  }
}

module.exports = new DragAndDropPage()