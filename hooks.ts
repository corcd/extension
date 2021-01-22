/*
 * @Author: Whzcorcd
 * @Date: 2021-01-22 11:16:28
 * @LastEditors: Whzcorcd
 * @LastEditTime: 2021-01-22 14:27:35
 * @Description: file content
 */
// 类注册中心，每个 key 代表一个类型的钩子
class Hooks {
  private hooks: Map<string, Set<any>>

  constructor() {
    this.hooks = new Map()
  }

  private get(name: string): Set<any> {
    return this.hooks.get(name) || new Set()
  }

  public add(name: string, fn: Function): void {
    const hooks = this.get(name)
    hooks.add(fn)
    this.hooks.set(name, hooks)
  }

  public invoke(name: string, ...args: any[]): any {
    const hooks = this.get(name)
    for (const hook of hooks) {
      hook(...args)
    }
  }

  public async invokePromise(name: string, ...args: any[]): Promise<any> {
    const hooks = this.get(name)
    for (const hook of hooks) {
      await hook(...args)
    }
  }
}

module.exports = new Hooks()
