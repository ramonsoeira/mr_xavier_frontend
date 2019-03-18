module.exports = {
  pwa: {
    name: 'Mr Xavier'
  },

  lintOnSave: undefined,

  pluginOptions: {
    i18n: {
      locale: 'pt-br',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import 'src/scss/root.scss';
          @import 'node_modules/bootstrap/scss/bootstrap';
        `
      }
    }
  }
}
