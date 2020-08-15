module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-cli-host/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}
