const { browser, expect, $, $$ } = require('@wdio/globals')

class AddRemovePage {
  get addButton$() { return $('.example button') }
  get deleteButton$() { return $('#elements button') }
  get deleteButtons$() { return $$('#elements button') }

  async clickAddButton() {
    await this.addButton$.waitForDisplayed()
    await this.addButton$.waitForClickable()
    await this.addButton$.moveTo()
    await this.addButton$.click()
  }

  async clickAddButtonMultipleTime(number) {
    await this.addButton$.waitForDisplayed()
    await this.addButton$.waitForClickable()
    await this.addButton$.moveTo()

    let i=0
    while (i<number) {
      await this.addButton$.click()
      i++
    }
  }

  /**
   * Use this only when there is only 1 delete button
   */
  async clickTheDeleteButton() {
    await this.deleteButton$.waitForDisplayed()
    await this.deleteButton$.waitForClickable()
    await this.deleteButton$.moveTo()
    await this.deleteButton$.click()
  }

  /**
   * Use this when there are many delete buttons
   */
  async clickADeleteButton(choice) {
    await this.deleteButtons$[choice].waitForDisplayed()
    await this.deleteButtons$[choice].waitForClickable()
    await this.deleteButtons$[choice].moveTo()
    await this.deleteButtons$[choice].click()
  }
}

module.exports = new AddRemovePage()