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

  it('delete the added button', async () => {
    await addRemovePage.clickTheDeleteButton()
    await expect(addRemovePage.deleteButton$).not.toExist()
  })

  it('add three delete buttons', async () => {
    await browser.url('/')
    await mainPage.clickItem(1)
    await addRemovePage.clickAddButtonMultipleTime(3)
    for await (const button$ of addRemovePage.deleteButtons$) {
      await expect(button$).toExist()
      await expect(button$).toBeClickable()
      await expect(button$).toHaveText('Delete')
    }
  })

  it('delete all delete buttons from first to last', async () => {
    for await (const button$ of addRemovePage.deleteButtons$) {
      await button$.click()
    }
    await expect(addRemovePage.deleteButton$).not.toExist()
  })

  it('delete all delete buttons from last to first', async () => {
    const number = 5
    await browser.url('/')
    await mainPage.clickItem(1)
    await addRemovePage.clickAddButtonMultipleTime(number)
    let i = number-1
    while (i>=0) {
      await addRemovePage.clickADeleteButton(i)
      i--
    }
    await expect(addRemovePage.deleteButton$).not.toExist()
  })
})
