const { browser, expect} = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const addRemovePage = require('../page-objects/add_remove.page')

describe('Elements Addition and Removal', () => {
  it('add one delete button', async () => {
    await browser.url('/')
    await mainPage.clickItem(1)
    await addRemovePage.clickAddButton()
    await expect(addRemovePage.deleteButton$).toExist()
    await expect(addRemovePage.deleteButton$).toBeClickable()
    await expect(addRemovePage.deleteButton$).toHaveText('Delete')
  })
})
