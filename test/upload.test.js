const { browser, expect, $, $$} = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const uploadPage = require('../page-objects/upload.page')
const path = require('path')
const exp = require('constants')

describe('Upload', () => {
  const fileName = 'image-11.png'
  const absoluteDirName = '/Users/cashbac/Playground/learning-webdriverio/test-data'

  it('open the upload page', async () => {
    await browser.url('/')
    await mainPage.clickItem(17)
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/upload`)
    await expect(uploadPage.pageHeading$).toHaveText('File Uploader')
  })

  it('upload a file via choose file', async () => {
    const filePath = path.join(absoluteDirName, fileName)
    await uploadPage.chooseAFile(filePath)
    await uploadPage.clickUploadButton()
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/upload`)
    await expect(uploadPage.pageHeading$).toHaveText('File Uploaded!')
    await expect(uploadPage.panelResult$).toHaveText(fileName)
  })

  it('submit without specify any file', async () => {
    await browser.url('/upload')
    await uploadPage.clickUploadButton()
    await expect($('h1')).toHaveText('Internal Server Error')
  })
})
