const { browser, expect, $, $$ } = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const {
  dynamicLoadingPage,
  firstDynamicLoadingPage,
  secondDynamicLoadingPage
} = require('../page-objects/dynamic_loading.page') 

describe('Dynamic Loading', () => {
  it('open the main page', async () => {
    await browser.url('/')
    await mainPage.clickItem(13)
    await browser.pause(500)
    await expect(dynamicLoadingPage.mainPageHeading$).toHaveText('Dynamically Loaded Page Elements')
    await expect(dynamicLoadingPage.linkToFirstPage$).toHaveHref('/dynamic_loading/1')
    await expect(dynamicLoadingPage.linkToSecondPage$).toHaveHref('/dynamic_loading/2')
  })

  it('open the first page', async () => {
    await dynamicLoadingPage.clickFirstPage()
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/dynamic_loading/1`)
    await expect(firstDynamicLoadingPage.mainPageHeading$).toHaveText('Dynamically Loaded Page Elements')
    await expect(firstDynamicLoadingPage.secondaryPageHeading$).toHaveText('Example 1: Element on page that is hidden')
  })

  it('open the second page', async () => {
    await browser.url('/dynamic_loading')
    await dynamicLoadingPage.clickSecondPage()
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/dynamic_loading/2`)
    await expect(secondDynamicLoadingPage.mainPageHeading$).toHaveText('Dynamically Loaded Page Elements')
    await expect(secondDynamicLoadingPage.secondaryPageHeading$).toHaveText('Example 2: Element rendered after the fact')
  })
})
