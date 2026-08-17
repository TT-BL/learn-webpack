// call, apply, bind 一定是被函数调用的
// 改变this的指向

Function.prototype.myCall = function (context, ...args) {
  if(typeof this !== 'function') {
    throw new Error('this must be a function')
  }
  context = context || window
  const fn = Symbol('fn')
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}
Function.prototype.myApply = function (context, args) {
  if(typeof this !== 'function') {
    throw new Error('this must be a function')
  }
  context = context || window
  const fn = Symbol('fn')
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}
Function.prototype.myBind = function (context, ...args) {
  if(typeof this !== 'function') {
    throw new Error('this must be a function')
  }
  const self = this
  const boundFn = function (...args1) {
    const isNew = this instanceof boundFn
    const finalContext = isNew ? this : context
    return self.call(finalContext, ...args, ...args1)
  }
  if (self.prototype) {
    boundFn.prototype = Object.create(self.prototype);
  }
  return boundFn
}
console.log(Object.prototype.toString.myCall([]));

// async/await 相比promise有哪些优势
// 可以在同一块作用域中执行多个异步任务， async/await底层原理是基于generator函数和promise的。generator可以暂停一个函数的执行，v8保留执行上下文。当异步任务完成，恢复并继续执行。

//纯函数，函数柯里化，函数组合
const toUpperCase = str => str.toUpperCase()
const exclaim = str => `${str}`

const compose = (...fns) => {
  return (...args) => {
    return fns.reduceRight((acc, fn) => {
      console.log(acc,111);
      return fn(acc)
    }, ...args)
  }
}
const shout = compose(exclaim, toUpperCase);
console.log(shout("hello"));

//前端常用的设计模式。 策略模式，装饰器模式， 观察者模式，发布-订阅者模式，单例模式，代理模式
// 策略模式很常见，通过传递不同的参数来实现不同的行为
// 装饰器模式常用于在不改变原函数的情况下，为其添加新的功能。（实现一个例子？）
// 观察者模式常用于实现事件驱动的系统，
// 发布-订阅者模式常用于实现事件总线，（vue的computed,watch以及{{}}在什么时候订阅的？）
// 单例模式常用于确保一个类只有一个实例，(toast,model只用一个dom节点，不多次建立。vuex)
// 代理模式常用于在不改变原对象的情况下，为其添加新的功能。（vue的proxy）


