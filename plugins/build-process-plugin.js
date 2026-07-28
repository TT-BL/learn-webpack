class BuildProcessPlugin {
  apply(compiler) {
    compiler.hooks.compile.tap('BuildProcessPlugin', () => {
      console.log('开始编译。。。')
    })
    compiler.hooks.emit.tapAsync('BuildProcessPlugin', (compilation, callback) => {
      console.log('---资源体积汇总---')
      Object.keys(compilation.assets).forEach((name) => {
        const size = compilation.assets[name].size()
        console.log(`${name}: ${(size / 1024).toFixed(2)} KB`)
      })
      callback()
    })
    compiler.hooks.done.tap('BuildProcessPlugin', (stats) => {
      console.log('编译完成', stats.endTime - stats.startTime,'ms')
    })
  }
}
module.exports = BuildProcessPlugin