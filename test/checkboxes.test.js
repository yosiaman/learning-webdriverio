const { browser, expect} = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const checkboxesPage = require('../page-objects/checkboxes.page')

describe('Checkboxes', () => {
  it('open the checkboxes page', async () => {
    await browser.url('/')
    await mainPage.clickItem(5)
    await browser.pause(500)
    await expect(checkboxesPage.firstCheckbox).toBePresent()
    await expect(checkboxesPage.secondCheckbox).toBePresent()
    await expect(checkboxesPage.firstCheckbox).not.toBeChecked()
    await expect(checkboxesPage.secondCheckbox).toBeChecked()
  })
})
