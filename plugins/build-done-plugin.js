class BuildDonePlugin {
  apply(compiler) {
    compiler.hooks.done.tap('BuildDonePlugin',(stats) => {
      console.log('Build done! 耗时:', stats.endTime - stats.startTime, 'ms');
    })
  }
}
module.exports = BuildDonePlugin