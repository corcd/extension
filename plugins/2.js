/*
 * @Author: Whzcorcd
 * @Date: 2021-01-22 14:13:56
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2021-01-22 14:31:25
 * @Description: file content
 */
console.log('2 loaded')

function apply(hook) {
  hook('onCreate', (ctx) => {
    console.log('2-onCreate')
    console.log(ctx)
  })
  hook('onStart', (ctx) => {
    console.log('2-onStart')
    console.log(ctx)
  })
}

module.exports = { apply }
