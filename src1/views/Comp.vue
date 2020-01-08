<template>
  <div class="comp">
    <!-- 监听的是input事件 -->
    <!-- <k-input :inputValue="inputValue" @input="inputValue = arguments[0]"></k-input> -->
    <k-form :model="model" :rules="rules">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input v-model="model.password" type="password"></k-input>
      </k-form-item>
    </k-form>
    <!-- <h3>{{ username }}</h3> -->
  </div>
</template>

<script>
import KInput from '../components/KInput'
import KFormItem from '../components/KFormItem'
import KForm from '../components/KForm'
export default {
  name: 'Comp',
  components: {
    KInput,
    KFormItem,
    KForm
  },
  data () {
    return {
      model: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comp {
  padding: 10px 20px;
}
</style>
