const { browser, expect, $, $$ } = require('@wdio/globals')

class DynamicLoadingPage {
  get mainPageHeading$() { return $('.example h3') }
  get linkToFirstPage$() { return ($$('.example a'))[0] }
  get linkToSecondPage$() { return ($$('.example a'))[1] }

  async clickFirstPage() {
    await this.linkToFirstPage$.waitForDisplayed()
    await this.linkToFirstPage$.waitForClickable()
    await this.linkToFirstPage$.click()
  }

  async clickSecondPage() {
    await this.linkToSecondPage$.waitForDisplayed()
    await this.linkToSecondPage$.waitForClickable()
    await this.linkToSecondPage$.click()
  }
}

class FirstDynamicLoadingPage {
  get mainPageHeading$() { return $('.example h3') }
  get secondaryPageHeading$() { return $('.example h4') }
  get startButton() { return $('#start button') }
  get message() { return $('#finish h4') }
  
  async clickStartButton() {
    await this.startButton.waitForDisplayed()
    await this.startButton.waitForClickable()
    await this.startButton.click()
  }
}

class SecondDynamicLoadingPage {
  get mainPageHeading$() { return $('.example h3') }
  get secondaryPageHeading$() { return $('.example h4') }
  get startButton() { return $('#start button') }
  get message() { return $('#finish h4') }
  
  async clickStartButton() {
    await this.startButton.waitForDisplayed()
    await this.startButton.waitForClickable()
    await this.startButton.click()
  }
}

module.exports = {
  dynamicLoadingPage: new DynamicLoadingPage(),
  firstDynamicLoadingPage: new FirstDynamicLoadingPage(),
  secondDynamicLoadingPage: new SecondDynamicLoadingPage(),
}