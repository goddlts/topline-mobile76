const { sep } = require('path')
//    a/b/c  sep是路径中的分隔符，为了兼容不同操作系统
module.exports = ({ file }) => {
  console.log(file)
  // 当打包的时候，所有跟样式相关的文件都会经过此处
  //    css/less/sass/vue
  // 判断当前样式文件是否是 vant 的，如果是vant的样式文件，基准值设置为 37.5
  // 如果是自己写的文件，基准值和设计图保持一致 75
  let rootValue = file.dirname.indexOf(`node_modules${sep}vant`) !== -1
    ? 37.5
    : 75

  return {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue,
        propList: ['*']
      }
    }
  }
}

// module.exports = {
//   plugins: {
//     'autoprefixer': {
//       overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
//     },
//     'postcss-pxtorem': {
//       rootValue: 75,
//       propList: ['*']
//     }
//   }
// }
