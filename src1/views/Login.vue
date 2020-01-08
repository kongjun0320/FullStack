<template>
  <div>
    <h1>login</h1>
    <cube-form
      :model="model"
      :schema="schema"
      @validate="validateHandler"
      @submit="submitHandler"
    ></cube-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      model: {
        username: '',
        password: ''
      },
      schema: {
        // 表单结构定义
        fields: [
          // 字段数组
          {
            type: 'input',
            modelKey: 'username',
            label: '用户名',
            props: {
              palceholder: '请输入用户名'
            },
            rules: {
              required: true
            },
            trigger: true
          },
          {
            type: 'input',
            modelKey: 'password',
            label: '密码',
            props: {
              type: 'password',
              palceholder: '请输入密码',
              eye: {
                open: true
              }
            },
            rules: {
              required: true
            },
            trigger: true
          },
          {
            type: 'submit',
            label: '登录'
          }
        ]
      }
    }
  },
  methods: {
    ...mapActions('loginStore', ['loginAction']),
    validateHandler () {

    },
    submitHandler (e) {
      // 阻止表单提交的默认行为
      e.preventDefault()
      // this.$store.dispatch('loginAction')
      this.loginAction(this.model).then(data => {
        if (data.code) {
          const path = this.$route.query.redirect || '/'
          this.$router.push(path)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
