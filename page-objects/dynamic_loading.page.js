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
}

class SecondDynamicLoadingPage {
  get mainPageHeading$() { return $('.example h3') }
  get secondaryPageHeading$() { return $('.example h4') }
}

module.exports = {
  dynamicLoadingPage: new DynamicLoadingPage(),
  firstDynamicLoadingPage: new FirstDynamicLoadingPage(),
  secondDynamicLoadingPage: new SecondDynamicLoadingPage(),
}