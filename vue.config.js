module.exports = {
  // https://cli.vuejs.org/config/#devserver-proxy
  devServer: {
      port: 8081,
      proxy: {
          '/': {
              target: 'http://127.0.0.1:8000',
              ws: false,
              changeOrigin: true,
              proxyTimeout: 1800000,
              timeout: 1800000,
              secure:false
          }
      }
  }
}