module.exports = {
  devServer: {
    proxy: 'https://shop-store-backend.herokuapp.com/'
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/sellhugs/' : '/',
  "transpileDependencies": ["vuetify"]
}