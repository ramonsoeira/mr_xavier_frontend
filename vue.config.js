module.exports = {
  pwa: {
    name: 'Mr Xavier'
  },

  devServer: {
    proxy: 'http://localhost:8080'
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
          @import 'src/scss/style.scss';
        `
      }
    }
  }
}
