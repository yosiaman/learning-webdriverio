const { browser, expect, $, $$ } = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const { loginPage, securePage} = require('../page-objects/login.page')
const testData = require('../test-data/user.data')

describe('Login', () => {
  it('open the login page', async () => {
    await browser.url('/')
    await mainPage.clickItem(20)
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/login`)
    await expect(loginPage.pageHeading$).toHaveText('Login Page')
  })

  it('login successfully with valid data', async () => {
    await loginPage.inputUsername(testData.validCase.USERNAME)
    await loginPage.inputPassword(testData.validCase.PASSWORD)
    await loginPage.clickLoginButton()
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/secure`)
    await expect(securePage.flashMessage$).toHaveText('You logged into a secure area!', { containing:true })
    await expect(securePage.pageHeading$).toHaveText('Secure Area')
  })

  // it('close the success flash message', async () => {
  //   await securePage.closeFlashMessage()
  //   await expect(securePage.flashMessage$).not.toExist()
  //   await expect(securePage.closeFMButton).not.toExist()
  //   await browser.pause(5000)
  // })

  it('logout successfully after login', async () => {
    await securePage.clickLogoutButton()
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/login`)
    await expect(loginPage.pageHeading$).toHaveText('Login Page')
    await expect(loginPage.flashMessage$).toHaveText('You logged out of the secure area!', { containing:true })
  })
})
