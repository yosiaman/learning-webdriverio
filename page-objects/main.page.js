const { browser, $, $$ } = require('@wdio/globals')

class Main {
  get listItem() { return $$('#content ul li a') }
  get heading() { return $('h1.heading') }

  async clickItem(index) {
    await this.listItem[index].waitForDisplayed()
    await this.listItem[index].waitForClickable()
    await this.listItem[index].moveTo()
    await this.listItem[index].click()
  }
}

module.exports = new Main()