const { browser, expect} = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const sliderPage = require('../page-objects/slider.page')

describe('Horizontal Slider', () => {
  it('open horizontal slider page', async () => {
    await browser.url('/')
    await mainPage.clickItem(23)
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/horizontal_slider`)
    await expect(sliderPage.pageHeading$).toHaveText('Horizontal Slider')
    await expect(sliderPage.sliderRange$).toBeDisplayed()
    await expect(sliderPage.sliderCaption$).toHaveText('0')
  })
})
