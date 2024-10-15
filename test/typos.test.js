const { browser, expect, $, $$} = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const typosPage = require('../page-objects/typos.page')

describe('Typos Check', () => {
  it('open the typos page', async () => {
    await browser.url('/')
    await mainPage.clickItem(42)
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/typos`)
    await expect(typosPage.pageHeading$).toHaveText('Typos')
  })

  it('checks the first paragraph', async () => {
    await expect(typosPage.paragraphOne$).toBeDisplayed()
    await expect(typosPage.paragraphOne$).toHaveText('This example demonstrates a typo being introduced. It does it randomly on each page load.')
  })
  
  it('checks the first paragraph', async () => {
    await expect(typosPage.paragraphTwo$).toBeDisplayed()
    await expect(typosPage.paragraphTwo$).toHaveText('Sometimes you\'ll see a typo, other times you won\'t.')
  })
})
