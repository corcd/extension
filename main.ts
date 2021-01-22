/*
 * @Author: Whzcorcd
 * @Date: 2021-01-22 11:07:20
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2021-01-22 14:35:05
 * @Description: file content
 */
const path = require('path')
const fs = require('fs-extra')
const hooks = require('./hooks')

const hook = (name: string, fn: Function): void => {
  hooks.add(name, fn)
}

// 加载器，加载 plugins 目录下所有插件
const loadPlugin = (): void => {
  fs.readdirSync(path.join(__dirname, './plugins')).forEach((file: string) =>
    require(require.resolve(`${__dirname}/plugins/${file}`)).apply(hook)
  )
}

// onCreate 生命周期
const onCreate = (): void => {
  console.log('onCreate')

  hooks.invoke('onCreate', { name: 'onCreate' })
}

// onStart 生命周期
const onStart = (): void => {
  console.log('onStart')

  hooks.invoke('onCreate', { name: 'onStart' })
}

// 主生命周期
const main = (): void => {
  loadPlugin()

  onCreate()
  onStart()
}

// main entry point
main()
