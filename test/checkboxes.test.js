const { browser, expect} = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const checkboxesPage = require('../page-objects/checkboxes.page')

describe('Checkboxes', () => {
  it('open the checkboxes page', async () => {
    await browser.url('/')
    await mainPage.clickItem(5)
    await browser.pause(500)
    await expect(checkboxesPage.firstCheckbox$).toBePresent()
    await expect(checkboxesPage.secondCheckbox$).toBePresent()
    await expect(checkboxesPage.firstCheckbox$).toBeDisplayed()
    await expect(checkboxesPage.secondCheckbox$).toBeDisplayed()
    await expect(checkboxesPage.firstCheckbox$).not.toBeChecked()
    await expect(checkboxesPage.secondCheckbox$).toBeChecked()
  })

  it('check the first checkbox', async () => {
    await checkboxesPage.clickFirstCheckbox()
    await expect(checkboxesPage.firstCheckbox$).toBeChecked()
    await expect(checkboxesPage.secondCheckbox$).toBeChecked()
  })

  it('uncheck the first checkbox', async () => {
    await checkboxesPage.clickFirstCheckbox()
    await expect(checkboxesPage.firstCheckbox$).not.toBeChecked()
    await expect(checkboxesPage.secondCheckbox$).toBeChecked()
  })
  
  it('uncheck the second checkbox', async () => {
    await checkboxesPage.clickSecondCheckbox()
    await expect(checkboxesPage.firstCheckbox$).not.toBeChecked()
    await expect(checkboxesPage.secondCheckbox$).not.toBeChecked()
  })
  
  it('check both checkboxes', async () => {
    await checkboxesPage.clickFirstCheckbox()
    await checkboxesPage.clickSecondCheckbox()
    await expect(checkboxesPage.firstCheckbox$).toBeChecked()
    await expect(checkboxesPage.secondCheckbox$).toBeChecked()
  })
  
  it('uncheck both checkboxes', async () => {
    await checkboxesPage.clickFirstCheckbox()
    await checkboxesPage.clickSecondCheckbox()
    await expect(checkboxesPage.firstCheckbox$).not.toBeChecked()
    await expect(checkboxesPage.secondCheckbox$).not.toBeChecked()
  })

  it('check again the first checkbox', async () => {
    await checkboxesPage.clickFirstCheckbox()
    await expect(checkboxesPage.firstCheckbox$).toBeChecked()
    await expect(checkboxesPage.secondCheckbox$).not.toBeChecked()
  })
})
