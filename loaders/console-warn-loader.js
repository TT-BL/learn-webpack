module.exports = function(source) {
  console.log('loader 执行了，文件长度:', source.length);
  return source.replace(/console\.log\(/g, 'console.warn(')
}