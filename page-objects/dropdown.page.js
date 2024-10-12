const { browser, expect, $, $$ } = require('@wdio/globals')

class DropdownPage {
  get pageHeading$() { return $('.example h3') }
  get dropdown$() { return $('#dropdown') }
  get initialChoice$() { return $('#dropdown option:nth-child(1)') }
  get option1$() { return $('#dropdown option:nth-child(2)') }
  get option2$() { return $('#dropdown option:nth-child(3)') }

  async clickDropdown() {
    await this.dropdown$.waitForDisplayed()
    await this.dropdown$.waitForClickable()
    await this.dropdown$.click()
  }

  async clickOption1() {
    await this.option1$.waitForDisplayed()
    await this.option1$.click()
  }

  async clickOption2() {
    await this.option2$.waitForDisplayed()
    await this.option2$.click()
  }
}

module.exports = new DropdownPage()