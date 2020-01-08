<template>
  <div class="k-form-item">
    <section class="form-box">
      <label>
        {{ label }}
        <slot></slot>
        <p v-if="errStatus">{{ errMessage }}</p>
      </label>
    </section>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: 'KFormItem',
  inject: ['kForm'],
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  mounted () {
    this.$on('validate', this.validator)
  },
  data () {
    return {
      errMessage: '',
      errStatus: false
    }
  },
  methods: {
    validator () {
      const rules = this.kForm.rules[this.prop]
      const value = this.kForm.model[this.prop]
      const descriptor = { [this.prop]: rules }
      console.log(descriptor)
      const schema = new Schema(descriptor)
      schema.validate({ [this.prop]: value }, error => {
        if (error) {
          this.errMessage = error[0].message
          this.errStatus = true
        } else {
          this.errMessage = ''
          this.errStatus = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.k-form-item {
}
</style>
