const { browser, expect, $, $$ } = require('@wdio/globals')

class UploadPage {
  get pageHeading$() { return $('.example h3') }
  get fileInput$() { return $('#file-upload') }
  get fileInputArea$() { return $('#drag-drop-upload') }
  get uploadButton$() { return $('#file-submit') }
  get panelResult$() { return $('#uploaded-files') }
  get fileCaption$() { return $('#drag-drop-upload div div.dz-details div span') }

  async clickUploadButton() {
    await this.uploadButton$.waitForDisplayed()
    await this.uploadButton$.waitForClickable()
    await this.uploadButton$.click()
  }

  /**
   * use setValue() to set a file path 
   */
  async chooseAFile(filePath) {
    await this.fileInput$.waitForDisplayed()
    await this.fileInput$.setValue(filePath)
  }

  // async chooseAFileInArea(filePath) {
  //   await this.fileInputArea$.waitForDisplayed()
  //   await this.fileInputArea$.setValue(filePath)
  // }
}

module.exports = new UploadPage()