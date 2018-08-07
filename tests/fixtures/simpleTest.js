module.exports = {
  'Github Repositories Navigation': function (browser) {
    browser
      .url('https://github.com/mezderman')
      .saveScreenshot('reports/screenshots/github.png', function (data) {
        console.log('image saved')
        browser.end()
      })
  }
}
