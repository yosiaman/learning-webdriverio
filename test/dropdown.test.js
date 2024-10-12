const { browser, expect, $, $$ } = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const dropdownPage = require('../page-objects/dropdown.page')

describe('Dropdown', () => {
  it('shows disabled initial choice at the first time', async () => {
    await browser.url('/')
    await mainPage.clickItem(10)
    await browser.pause(500)
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/dropdown`)
    await expect(dropdownPage.pageHeading$).toHaveText('Dropdown List')
    await expect(dropdownPage.initialChoice$).toBeSelected()
    await expect(dropdownPage.initialChoice$).toBeDisabled()
    // console.log('this have value' + await dropdownPage.dropdown$.getValue())
    // await expect(dropdownPage.dropdown$.getValue()).toHaveValue()
  })

  it('choose option 1', async () => {
    await dropdownPage.clickDropdown()    // this actually not needed, can be bypass by directly choose option
    await dropdownPage.clickOption1()
    await expect(dropdownPage.option1$).toBeSelected()
    await expect(dropdownPage.dropdown$).toHaveValue("1")
  })
  
  it('choose option 2', async () => {
    await dropdownPage.clickDropdown()
    await dropdownPage.clickOption2()
    await expect(dropdownPage.option2$).toBeSelected()
    await expect(dropdownPage.dropdown$).toHaveValue("2")
  })
  
  it('unable to choose the initial choice', async () => {
    await dropdownPage.clickDropdown()
    await dropdownPage.clickInitialChoice()
    await expect(dropdownPage.initialChoice$).not.toBeSelected()
    await expect(dropdownPage.option2$).toBeSelected()
  })
})
