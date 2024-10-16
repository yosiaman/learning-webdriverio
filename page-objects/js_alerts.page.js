const { browser, expect, $, $$ } = require('@wdio/globals')

class JSAlertsPage {
  get pageHeading$() { return $('.example h3') }
  get alertButtons$$() { return $$('ul li button') }
  get textResult$() { return $('#result') }

  async clickAlertButton(number) {
    const button = await this.alertButtons$$[number]
    await button.waitForDisplayed()
    await button.waitForClickable()
    await button.click()
  }
}

module.exports = new JSAlertsPage()