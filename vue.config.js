module.exports = {
  /** 区分打包环境与开发环境
   * process.env.NODE_ENV==='production'  (打包环境)
   * process.env.NODE_ENV==='development' (开发环境)
   * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
   */
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '127.0.0.1',
    port: 5000,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  }
}

