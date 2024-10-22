const { browser, expect, $ } = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const downloadPage = require('../page-objects/download.page')
import { assert } from 'chai'
import deleteFileIfExists, { filePath } from '../helper/download.helper'
import fs from "fs"

describe('Download', () => {
  before(() => {
    deleteFileIfExists()
  })

  after(() => {
    deleteFileIfExists()
  })

  it('open the download page', async () => {
    await browser.url('/')
    await mainPage.clickItem(16)
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/download`)
    await expect(downloadPage.pageHeading$).toHaveText('File Downloader')
  })

  it('download hello.txt file', async () => {
    await downloadPage.clickDownload()
    await browser.waitUntil(async () => {
      console.log(`FILE IS ON : ${filePath}`)
      if (fs.existsSync(filePath)) {
        console.log('The file exists')
        return fs.existsSync(filePath)
      }
      console.log('The file not exists')
    }, { timeout:5000, timeoutMsg:"file not downloaded yet." })
    const fileExists = fs.existsSync(filePath)
    assert.equal(fileExists, true)
  })
})
