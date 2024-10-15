const { browser, expect, $, $$ } = require('@wdio/globals')

class HoversPage {
  get pageHeading$() { return $('.example h3') }
  get pictures$$() { return $$('.figure img') }
  get picCaptions$$() { return $$('figcaption') }
  get picTitles$$() { return $$('.figcaption h5') }
  get picLinks$$() { return $$('.figcaption a') }
  
  async hoverToPicture(number) {
    const picture = await this.pictures$$[number]
    await picture.waitForDisplayed()
    await picture.moveTo()
  }

  async clickLink(number) {
    const link = await this.picLinks$$[number]
    await link.waitForDisplayed()
    await link.click()
  }
}

module.exports = new HoversPage()