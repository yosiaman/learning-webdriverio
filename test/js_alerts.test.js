const { browser, expect, $, $$ } = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const jsAlertsPage = require('../page-objects/js_alerts.page')
const { assert } = require('chai')


describe('JS Alerts', () => {
  it('open js alerts page', async () => {
    await browser.url('/')
    await mainPage.clickItem(28)
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/javascript_alerts`)
    await expect(jsAlertsPage.pageHeading$).toHaveText('JavaScript Alerts')
  })

  it('open JS Alerts', async () => {
    await jsAlertsPage.clickAlertButton(0)
    assert.equal(await browser.getAlertText(), 'I am a JS Alert')
  })

  it('close JS Alerts by accept it', async () => {
    await browser.acceptAlert()
    await expect(jsAlertsPage.textResult$).toBeDisplayed()
    await expect(jsAlertsPage.textResult$).toHaveText('You successfully clicked an alert')
    await expect(jsAlertsPage.textResult$).toHaveAttr('style', 'color:green')
  })

  it('close JS Alerts by dismiss it', async () => {
    await jsAlertsPage.clickAlertButton(0)
    await browser.dismissAlert()
    await expect(jsAlertsPage.textResult$).toBeDisplayed()
    await expect(jsAlertsPage.textResult$).toHaveText('You successfully clicked an alert')
    await expect(jsAlertsPage.textResult$).toHaveAttr('style', 'color:green')
  })

  it('open JS confirm', async () => {
    await jsAlertsPage.clickAlertButton(1)
    assert.equal(await browser.getAlertText(), 'I am a JS Confirm')
  })

  it('close JS Confirm by accept it', async () => {
    await browser.acceptAlert()
    await expect(jsAlertsPage.textResult$).toBeDisplayed()
    await expect(jsAlertsPage.textResult$).toHaveText('You clicked: Ok')
    await expect(jsAlertsPage.textResult$).toHaveAttr('style', 'color:green')
  })

  it('close JS Confirm by dismiss it', async () => {
    await jsAlertsPage.clickAlertButton(1)
    await browser.dismissAlert()
    await expect(jsAlertsPage.textResult$).toBeDisplayed()
    await expect(jsAlertsPage.textResult$).toHaveText('You clicked: Cancel')
    await expect(jsAlertsPage.textResult$).toHaveAttr('style', 'color:green')
  })

  it('open JS Prompt', async () => {
    await jsAlertsPage.clickAlertButton(2)
    assert.equal(await browser.getAlertText(), 'I am a JS prompt')
  })

  it('close JS Prompt by accept it without typing anything', async () => {
    await browser.acceptAlert()
    await expect(jsAlertsPage.textResult$).toBeDisplayed()
    await expect(jsAlertsPage.textResult$).toHaveText('You entered:')
    await expect(jsAlertsPage.textResult$).toHaveAttr('style', 'color:green')
  })

  it('close JS Prompt by dismiss it without typing anything', async () => {
    await jsAlertsPage.clickAlertButton(2)
    await browser.dismissAlert()
    await expect(jsAlertsPage.textResult$).toBeDisplayed()
    await expect(jsAlertsPage.textResult$).toHaveText('You entered: null')
    await expect(jsAlertsPage.textResult$).toHaveAttr('style', 'color:green')
  })

  it('close JS Prompts by accept it with words: I Love You', async () => {
    await jsAlertsPage.clickAlertButton(2)
    await browser.sendAlertText('I Love You')
    await browser.acceptAlert()
    await expect(jsAlertsPage.textResult$).toBeDisplayed()
    await expect(jsAlertsPage.textResult$).toHaveText('You entered: I Love You')
    await expect(jsAlertsPage.textResult$).toHaveAttr('style', 'color:green')
  })

  it('close JS Prompt by dismiss it with words: I Hate You', async () => {
    await jsAlertsPage.clickAlertButton(2)
    await browser.sendAlertText('I Hate You')
    await browser.dismissAlert()
    await expect(jsAlertsPage.textResult$).toBeDisplayed()
    await expect(jsAlertsPage.textResult$).toHaveText('You entered: null')
    await expect(jsAlertsPage.textResult$).toHaveAttr('style', 'color:green')
  })
})
