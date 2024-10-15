const { browser, expect, $, $$ } = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const hoversPage = require('../page-objects/hovers.page')

describe('Hovers', () => {
  it('open the hovers page', async () => {
    await browser.url('/')
    await mainPage.clickItem(24)
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/hovers`)
    await expect(hoversPage.pageHeading$).toHaveText('Hovers')
    await hoversPage.picCaptions$$.forEach(caption => {
      expect(caption.$('h5')).not.toBeDisplayed()
      expect(caption.$('a')).not.toBeDisplayed()
      expect(caption.$('a')).not.toBeClickable()
    })
  })

  it('hovers to the first image', async () => {
    await hoversPage.hoverToPicture(0)
    await expect(hoversPage.picTitles$$[0]).toBeDisplayed()
    await expect(hoversPage.picTitles$$[0]).toHaveText('user1', { containing:true })
    await expect(hoversPage.picLinks$$[0]).toBeDisplayed()
    await expect(hoversPage.picLinks$$[0]).toBeClickable()
  })

  it('hovers to the second image', async () => {
    await hoversPage.hoverToPicture(1)
    await expect(hoversPage.picTitles$$[1]).toBeDisplayed()
    await expect(hoversPage.picTitles$$[1]).toHaveText('user2', { containing:true })
    await expect(hoversPage.picLinks$$[1]).toBeDisplayed()
    await expect(hoversPage.picLinks$$[1]).toBeClickable()
  })

  it('hovers to the second image', async () => {
    await hoversPage.hoverToPicture(2)
    await expect(hoversPage.picTitles$$[2]).toBeDisplayed()
    await expect(hoversPage.picTitles$$[2]).toHaveText('user3', { containing:true })
    await expect(hoversPage.picLinks$$[2]).toBeDisplayed()
    await expect(hoversPage.picLinks$$[2]).toBeClickable()
  })

  it('goes to profile detail of user 1', async () => {
    await browser.url('/hovers')
    await hoversPage.hoverToPicture(0)
    await hoversPage.clickLink(0)
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/users/1`)
    await expect($('h1')).toHaveText('Not Found')
  })

  it('goes to profile detail of user 2', async () => {
    await browser.url('/hovers')
    await hoversPage.hoverToPicture(1)
    await hoversPage.clickLink(1)
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/users/2`)
    await expect($('h1')).toHaveText('Not Found')
  })

  it('goes to profile detail of user 3', async () => {
    await browser.url('/hovers')
    await hoversPage.hoverToPicture(2)
    await hoversPage.clickLink(2)
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/users/3`)
    await expect($('h1')).toHaveText('Not Found')
  })
})
