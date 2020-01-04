class Compile {
  constructor (el, vm) {
    // 需要遍历的宿主节点
    this.$el = document.querySelector(el)
    this.$vm = vm

    // 编译
    if (this.$el) {
      // 转换内部的DOM节点为片段 减少页面的回流和重绘
      this.$fragment = this.node2Fragment(this.$el)
      // 执行编译
      this.compile(this.$fragment)

      this.$el.appendChild(this.$fragment)
    }
  }
  node2Fragment (el) {
    const flag = document.createDocumentFragment()
    // 讲el中所有的子元素移动到flag(注意是移除操作)
    let child
    while ((child = el.firstChild)) {
      flag.appendChild(child)
    }
    return flag
  }
  // 编译过程
  compile (el) {
    const childNodes = el.childNodes
    Array.from(childNodes).forEach(child => {
      if (this.isElement(child)) {
        // 元素
        // console.log('编译元素', child.nodeName)
        const nodeAttrs = child.attributes
        Array.from(nodeAttrs).forEach(attr => {
          const attrName = attr.name
          const exp = attr.value
          // console.log(attrName, exp)
          if (this.isDirective(attrName)) {
            const [, direc] = attrName.split('-')
            this[direc] && this[direc](child, this.$vm, exp)
          } else if (this.isEvent(attrName)) {
            const [, direc] = attrName.split('@')
            this.eventHandle(child, this.$vm, exp, direc)
          }
        })
      } else if (this.isInterpolation(child)) {
        // 查找插值表达式
        // console.log('编译文本', child.textContent)
        this.compileText(child)
      }
      // 递归子节点
      if (child.childNodes && child.childNodes) {
        this.compile(child)
      }
    })
  }
  compileText (node) {
    // console.log(RegExp.$1)
    // console.log(this.$vm.$data[RegExp.$1.trim()])
    // node.textContent = this.$vm.$data[RegExp.$1.trim()]
    this.update(node, this.$vm, RegExp.$1, 'text')
  }
  // 更新函数
  update (node, vm, exp, dir) {
    const updateFn = this[dir + 'Updater']
    // 初始化
    updateFn && updateFn(node, vm[exp])

    // 依赖收集
    new Watcher(vm, exp, function (val) {
      updateFn && updateFn(node, val)
    })
  }
  textUpdater (node, value) {
    node.textContent = value
  }
  text (node, vm, exp) {
    this.update(node, vm, exp, 'text')
  }
  // 事件处理
  eventHandle (node, vm, exp, direc) {
    let fn = vm.$options.methods && vm.$options.methods[exp]
    if (direc && fn) {
      node.addEventListener(direc, fn.bind(vm))
    }
  }
  // 双向数据绑定
  model (node, vm, exp) {
    // 数据到视图的更新
    this.update(node, vm, exp, 'model')
    // 视图到数据的更新
    node.addEventListener('input', e => {
      vm[exp] = e.target.value
    })
  }
  html (node, vm, exp) {
    this.update(node, vm, exp, 'html')
  }
  htmlUpdater (node, val) {
    node.innerHTML = val
  }
  modelUpdater (node, val) {
    node.value = val
  }
  isDirective (node) {
    return node.startsWith('k-')
  }
  isEvent (node) {
    return node.startsWith('@')
  }
  isElement (node) {
    return node.nodeType === 1
  }
  isInterpolation (node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }
}
