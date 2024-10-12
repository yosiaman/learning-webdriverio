const { browser, expect, $ } = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const dragDropPage = require('../page-objects/drag_drop.page')

describe('Drag and Drop', () => {
  it('drag box A to column B', async () => {
    await browser.url('/')
    await mainPage.clickItem(9)
    await browser.pause(500)
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/drag_and_drop`)

    await dragDropPage.dragBoxAToColumnB()
    await expect(dragDropPage.columnAHeader).toHaveText('B')
    await expect(dragDropPage.columnBHeader).toHaveText('A')
    // await browser.debug()
    // await expect($('#column-b meta')).toExist()
  })
  
  it('drag box A to column B by using Pixel Coordinate', async () => {
    await browser.url('/')
    await browser.maximizeWindow()
    await mainPage.clickItem(9)
    await browser.pause(500)
    await dragDropPage.dragBoxAToCoordinateColumnB(225, 0)    // get pixel coordinate with help of chrome extension "Pixel Measurement"
    await expect(dragDropPage.columnAHeader).toHaveText('B')
    await expect(dragDropPage.columnBHeader).toHaveText('A')
    // await expect($('#column-b meta')).toExist()
  })
})
