const BASE_URL=process.env.NODE_ENV==='production'?'/iview-admin/':'/'
const path=require('path');
const resolve=dir=>path.join(__dirname,dir);

module.exports = {
    lintOnSave: false,
    publicPath: './',
    baseUrl:BASE_URL,
    chainWebpack:config=>{
      config.resolve.alias
      .set('@',resolve('src'))
      .set('_c',resolve('src/components'))
    },
    // 打包不生成map文件

    procutionSourceMap:false,
    // 跨域
    devServer:{
      proxy:'http://localhost:4000'
    }
    
}