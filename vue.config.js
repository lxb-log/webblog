module.exports = {
    // 关闭eslint , 默认是true
    lintOnSave: false,
  
    // 配置反向代理, 解决请求时的跨域
    devServer: {
      proxy: {
        '/fil': { // 只要是以 '/ajax' 开头的ajax请求都会自动加上 target 属性值
          target: 'https://cdnir.com',
          changeOrigin: true
        },
        '/server': { // 只要是以 '/ajax' 开头的ajax请求都会自动加上 target 属性值
          target: 'http://127.0.0.1:8000',
          changeOrigin: true
        },
        '/blog': {
          target: 'http://127.0.0.1:8000',
          changeOrigin: true
        }

      }
    }
  }
  