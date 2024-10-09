const { browser, expect} = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const abTestPage = require('../page-objects/ab_test.page')

describe('Page Redirection', () => {
    it('redirects to another page', async () => {
      await browser.url('/')
      await mainPage.clickItem(0)
      await browser.pause(2000)
      await expect(browser).toHaveUrl(`${browser.options.baseUrl}/abtest`)
      await expect(browser).toHaveTitle('The Internet')
      await expect(abTestPage.heading).toHaveText('A/B Test Control')
    })

    it('back to Home Page', async () => {
        await browser.back()
        await browser.pause(2000)
        await expect(browser).toHaveUrl(`${browser.options.baseUrl}/`)
        await expect(browser).toHaveTitle('The Internet')
        await expect(mainPage.heading).toHaveText('Welcome to the-internet')
      })
  })

