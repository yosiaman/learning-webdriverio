const { browser, $, $$ } = require('@wdio/globals')

class HorizontalSliderPage {
  get pageHeading$() { return $('.example h3') }
  get sliderRange$() { return $('.sliderContainer input') }
  get sliderCaption$() { return $('#range') }
}

module.exports = new HorizontalSliderPage()