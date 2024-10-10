const { browser, expect, $, $$ } = require('@wdio/globals')

class CheckboxesPage {
  get firstCheckbox() { return $('#checkboxes input:nth-child(1)') }
  get secondCheckbox() { return $('#checkboxes input:nth-child(3)') }

  async clickFirstCheckbox(position) {
    await this.firstCheckbox.waitForDisplayed()
    await this.firstCheckbox.waitForClickable()
    await this.firstCheckbox.moveTo()
    await this.firstCheckbox.click()

  }

  async clickSecondCheckbox(position) {
    await this.secondCheckbox.waitForDisplayed()
    await this.secondCheckbox.waitForClickable()
    await this.secondCheckbox.moveTo()
    await this.secondCheckbox.click()

  }
}

module.exports = new CheckboxesPage()