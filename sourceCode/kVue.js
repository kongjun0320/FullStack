class KVue {
  constructor (options) {
    this.$options = options

    // 数据响应化
    this.$data = options.data
    this.observe(options.data)

    // new Watcher()
    // console.log(this.$data.name)
    new Compile(options.el, this)

    if (options.created) {
      options.created.call(this)
    }
  }
  observe (data) {
    if (!data || typeof data !== 'object') return
    // 遍历对象
    Object.keys(data).forEach(key => {
      // 数据响应化
      this.defineReactive(data, key, data[key])
      // 将$data中的数据挂载到vm实例上
      this.proxyData(key)
    })
  }
  proxyData (key) {
    Object.defineProperty(this, key, {
      get () {
        return this.$data[key]
      },
      set (newVal) {
        this.$data[key] = newVal
      }
    })
  }
  // 定义数据响应化
  defineReactive (obj, key, val) {
    const dep = new Dep()
    // 递归遍历属性
    if (typeof val === 'object') {
      this.observe(val)
    }

    Object.defineProperty(obj, key, {
      get () {
        Dep.target && dep.addDep(Dep.target)
        return val
      },
      set (newVal) {
        if (val === newVal) return
        val = newVal
        // console.log(`${key}的属性值被更新了${newVal}`)
        dep.notify()
      }
    })
  }
}

class Dep {
  constructor () {
    this.deps = []
  }
  addDep (dep) {
    this.deps.push(dep)
  }
  notify () {
    this.deps.forEach(dep => dep.update())
  }
}

class Watcher {
  constructor (vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb

    Dep.target = this
    // 触发getter 添加依赖
    this.vm[this.key]
    Dep.target = null
  }
  update () {
    // console.log('属性更新了')
    this.cb.call(this.vm, this.vm[this.key])
  }
}
