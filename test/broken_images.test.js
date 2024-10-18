const { browser, expect} = require('@wdio/globals')
const mainPage = require('../page-objects/main.page')
const brokeImagesPage = require('../page-objects/broken_images.page')
const { assert } = require('chai')

describe('Broken Images', () => {
  it('open broken images page', async () => {
    await browser.url('/')
    await mainPage.clickItem(3)
    await expect(browser).toHaveUrl(`${browser.options.baseUrl}/broken_images`)
    await expect(brokeImagesPage.pageHeading$).toHaveText('Broken Images')
  })

  it('check the first image', async () => {
    const image = await brokeImagesPage.images$$[0]
    const imageUrl = await image.getAttribute('src')
    console.log(`Image URL: ${imageUrl}`)
    try {
      const naturalWidth = await browser.execute(async function (imageUrl) {
       return new Promise((resolve, reject) => {
          if (!imageUrl) {
            reject('Invalid image URL')
            return
          }
          
          // 1. create an empty HTML Image object called img in memory (not displayed)
          const img = new Image()   // It does not yet load any image

          // 2. setting up event listeners (onload and onerror) before the load starts
          img.onload = function () {
            console.log(`Image loaded with naturalWidth: ${img.naturalWidth}`)
            resolve(img.naturalWidth)
          }
          img.onerror = function () {
            console.log(`Error loading image with URL: ${imageUrl}`)
            resolve(0)
          }
          img.src = imageUrl    // 3. trigger the image loading process from url imageUrl
        })
      }, imageUrl)

      console.log(`tampilkan naturalWidth = ${await naturalWidth}`)
      assert.notEqual(naturalWidth, 0)
    } catch (error) {
      console.log(`Error occured: ${error}`)
      throw error
    }
  })
})
