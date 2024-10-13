module.exports = {
  validCase: {
    USERNAME: 'tomsmith',
    PASSWORD: 'SuperSecretPassword!',
  },
  wrongUsername: {
    USERNAME: 'xxxxx',
    PASSWORD: 'SuperSecretPassword!',
  },
  wrongPassword: {
    USERNAME: 'tomsmith',
    PASSWORD: 'xxxxx!',
  },
  emptyData: {
    USERNAME: '',
    PASSWORD: '',
  },
}