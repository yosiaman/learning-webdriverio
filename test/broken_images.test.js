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

  it('checks the first image', async () => {
    const image = await brokeImagesPage.images$$[0]
    const imageUrl = await image.getAttribute('src')
    console.log(`Image URL: ${imageUrl}`)
    try {
      const naturalWidth = await browser.execute(async function (imageUrl) {
       return new Promise((resolve, reject) => {
          if (!imageUrl) {
            reject('Invalid image URL') // reject the promise if imageUrl is undefined or empty string
            return                      // skips the rest of the logic if imageUrl is undefined or empty string
          }
          
          // 1. create an empty HTML Image object called img in memory (not displayed)
          const img = new Image()   // It does not yet load any image from internet

          // 2. setting up event listeners (onload and onerror) before the load starts
          img.onload = function () {
            resolve(img.naturalWidth)
          }
          img.onerror = function () {
            resolve(0)
          }
          img.src = imageUrl    // 3. starts the image loading process by loadng image from imageUrl
        })
      }, imageUrl)

      console.log(`show naturalWidth = ${await naturalWidth}`)
      assert.notEqual(naturalWidth, 0)  //assertion that image is not broken
    } catch (error) {
      console.log(`Error occured: ${error}`)
      throw error
    }
  })

  it('checks the second image', async () => {
    const image = await brokeImagesPage.images$$[1]
    const imageUrl = await image.getAttribute('src')
    console.log(`Image URL: ${imageUrl}`)
    try {
      const naturalWidth = await browser.execute(async function (imageUrl) {
        return new Promise((resolve, reject) => {
          if (!imageUrl) {
            reject('Invalid image URL')
            return
          }

          const img = new Image()
          img.onload = function () {
            resolve(img.naturalWidth)
          }
          img.onerror = function () {
            resolve(0)
          }
          img.src = imageUrl
        })
      }, imageUrl)

      console.log(`show naturalWidth = ${await naturalWidth}`)
      assert.notEqual(naturalWidth, 0)  //assertion that image is not broken
    } catch (error) {
      console.log(`Error occured: ${error}`)
      throw error
    }
  })

  it('checks the last image', async () => {
    const image = await brokeImagesPage.images$$[2]
    const imageUrl = await image.getAttribute('src')
    console.log(`Image URL: ${imageUrl}`)
    try {
      const naturalWidth = await browser.execute(async function (imageUrl) {
        return new Promise((resolve, reject) => {
          if (!imageUrl) {
            reject('Invalid image URL')
            return
          }

          const img = new Image()
          img.onload = function () {
            resolve(img.naturalWidth)
          }
          img.onerror = function () {
            resolve(0)
          }
          img.src = imageUrl
        })
      }, imageUrl)

      console.log(`show naturalWidth = ${await naturalWidth}`)
      assert.notEqual(naturalWidth, 0)  //assertion that image is not broken
    } catch (error) {
      console.log(`Error occured: ${error}`)
      throw error
    }
  })
})
