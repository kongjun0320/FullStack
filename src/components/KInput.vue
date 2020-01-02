<template>
  <div class="k-input">
    <input :type="type" :value="inputValue" @input="inputChange"/>
  </div>
</template>

<script>
export default {
  name: 'KInput',
  props: {
    inputValue: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    inputChange (e) {
      let tempValue = e.target.value
      // 注意分发input事件
      this.$emit('input', tempValue)
      // 给父级分发个事件
      this.$parent.$emit('validate')
    }
  }
}
</script>

<style lang="scss" scoped></style>
