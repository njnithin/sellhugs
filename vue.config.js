module.exports = {
  devServer: {
    proxy: 'https://shop-store-backend.herokuapp.com/'
  },
  publicPath: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE : '/'
}