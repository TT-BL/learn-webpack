# 第一阶段

## 创建了webpack项目,配置webpack.config.js打包文件查看dist
1. 入口，出口
2. 使用loader,plugin
3. 自定义loader,plugin

# 第二阶段

1. 多入口分包
2. 动态引入 import（）
3. chunks 策略对比 async,inital,all。 cacheGroups的分组配置。minChunk---指定一个模块被多少个入口（或 chunk）引用时才抽出来。 priority:等级越高就先执行哪个

# 第三阶段

1. sideEffects, tree shaking. mode为production时只打包使用的代码
2. usedExports, 对未使用的代码打包后会有提示, 只打包使用的代码
3. minimize, 压缩代码. minimizer: [new TerserPlugin()],使用哪个压缩

# 第四阶段

1. cache，缓存整个模块图, 重复打包时, 只打包变化的代码，loader也可以使用cacheDirectory缓存，缓存loader层的转译
2. minimizer下使用TerserPlugin和CssMinimizerPlugin来压缩代码，删除log输出

# webpack 5学习

## 阶段一
1. loader执行顺序，pitch下按顺序执行，normal下逆序执行，pitch下如果直接return，后面的loader不会继续执行。
2. 异步loader,使用this.async()告诉webpack这是异步的loader, 异步任务执行完后, 调用callback(null, source)返回结果
3. 构建plugin,了解plugin的钩子函数，done,emit,compile
