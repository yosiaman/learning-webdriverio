const { browser, expect, $, $$ } = require('@wdio/globals')

class DownloadPage {
  get pageHeading$() { return $('h3*=Download') }
  get downloadLink$() { return $('a*=hello') }

  async clickDownload() {
    await this.downloadLink$.click()
  }
}

module.exports = new DownloadPage()