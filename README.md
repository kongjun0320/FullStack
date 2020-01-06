# full-stack
### 1、如果data中的数据不需要响应式
```javascript
data(){
  return {
    name:'' //这里面的数据是响应式的
  }
}
mounted(){
  this.msg = ''  //如果需要数据不是响应式的可以在这里声明
}
