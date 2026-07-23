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
