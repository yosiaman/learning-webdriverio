const { browser, expect, $, $$ } = require('@wdio/globals')

class LoginPage {
  get flashMessage$() { return $('#flash') }
  get pageHeading$() { return $('.example h2') }
  get loginForm$() { return $('#login') }
  get username$() { return $('#username') }
  get password$() { return $('#password') }
  get loginButton$() { return $('button.radius') }

  async inputUsername(username) {
    await this.username$.waitForDisplayed()
    await this.username$.setValue(username)
  }

  async inputPassword(password) {
    await this.password$.waitForDisplayed()
    await this.password$.setValue(password)
  }

  async clickLoginButton() {
    await this.loginButton$.waitForDisplayed()
    await this.loginButton$.waitForClickable()
    await this.loginButton$.click()
  }
}

class SecurePage {
  get flashMessage$() { return $('#flash') }
  get pageHeading$() { return $('.example h2') }
  get logoutButton$() { return $('a.button') }
  get closeFMButton$() { return $('#flash a') }

  async clickLogoutButton() {
    await this.logoutButton$.waitForDisplayed()
    await this.logoutButton$.click()
  }

  // gak dipake dulu
  async closeFlashMessage() {
    await this.closeFMButton$.waitForDisplayed()
    // await this.closeFMButton.waitForClickable()
    await this.closeFMButton$.click({ button:0, y:5 })
  }
}

module.exports = {
  loginPage: new LoginPage(),
  securePage: new SecurePage(),
}