// module.exports = function (source) {
//   console.log('file-header-loader',this.resourcePath)
//   const fileName = this.resourcePath.split('/').pop()
//   const header = `/* Auto-generated header by file-header-loader\n * File: ${fileName}\n */\n`
//   return header + source
// }

module.exports = function(source) {
  const callback = this.async()
  const fileName = this.resourcePath.split('/').pop() 
  setTimeout(() => {
    const header = `/* Auto-generated header by file-header-loader\n * File: ${fileName}\n */\n`
    callback(null, header + source)
  }, 500)
}

module.exports.pitch = function() {
  console.log('file-header-loader pitch 执行了')
}
