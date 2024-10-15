const { browser, expect, $, $$ } = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const { loginPage, securePage } = require('../page-objects/login.page')
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
    await expect(loginPage.flashMessage$).toHaveElementClass(['flash', 'success'])
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
    await expect(loginPage.flashMessage$).toHaveElementClass(['flash', 'success'])
  })

  it('failed to login due to wrong username', async () => {
    await browser.url('/login')
    await loginPage.inputUsername(testData.wrongUsername.USERNAME)
    await loginPage.inputPassword(testData.wrongUsername.PASSWORD)
    await loginPage.clickLoginButton()
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/login`)
    await expect(loginPage.flashMessage$).toHaveText('Your username is invalid!', { containing:true })
    await expect(loginPage.flashMessage$).toHaveElementClass(['flash', 'error'])
  })
  
  it('failed to login due to wrong password', async () => {
    await loginPage.inputUsername(testData.wrongPassword.USERNAME)
    await loginPage.inputPassword(testData.wrongPassword.PASSWORD)
    await loginPage.clickLoginButton()
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/login`)
    await expect(loginPage.flashMessage$).toHaveText('Your password is invalid!', { containing:true })
    await expect(loginPage.flashMessage$).toHaveElementClass(['flash', 'error'])  
  })
  
  it('failed to login due to empty username and password', async () => {
    await loginPage.inputUsername(testData.emptyData.USERNAME)
    await loginPage.inputPassword(testData.emptyData.PASSWORD)
    await loginPage.clickLoginButton()
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/login`)
    await expect(loginPage.flashMessage$).toHaveText('Your username is invalid!', { containing:true })
    await expect(loginPage.flashMessage$).toHaveElementClass(['flash', 'error'])
  })

  it('login successfully after failed login 3x', async () => {
    await loginPage.inputUsername(testData.validCase.USERNAME)
    await loginPage.inputPassword(testData.validCase.PASSWORD)
    await loginPage.clickLoginButton()
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/secure`)
    await expect(securePage.flashMessage$).toHaveText('You logged into a secure area!', { containing:true })
    await expect(securePage.pageHeading$).toHaveText('Secure Area')
    await expect(loginPage.flashMessage$).toHaveElementClass(['flash', 'success'])
  })
})
