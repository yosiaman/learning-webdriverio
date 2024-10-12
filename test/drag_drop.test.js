const { browser, expect } = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const dragDropPage = require('../page-objects/drag_drop.page')

describe('Drag and Drop', () => {
  it('drag box A to column B', async () => {
    await browser.url('/')
    await mainPage.clickItem(9)
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/drag_and_drop`)
    // await browser.pause(3000)
  })
})
