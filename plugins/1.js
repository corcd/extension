/*
 * @Author: Whzcorcd
 * @Date: 2021-01-22 14:10:08
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2021-01-22 14:31:40
 * @Description: file content
 */
console.log('1 loaded')

function apply(hook) {
  hook('onCreate', (ctx) => {
    console.log('1-onCreate')
    console.log(ctx)
  })
  hook('onStart', (ctx) => {
    console.log('1-onStart')
    console.log(ctx)
  })
}

module.exports = { apply }
