<template>
  <!-- <div>Child2=={{ age }}==>{{ name }}=====***</div> -->
  <div>Child2=={{ this.$route.query.age }}==>{{ this.$route.query.name }}</div>
</template>

<script>
export default {
  name: 'Child2',
  // 路由的 prop：true 只能针对于params 参数
  props: {
    name: {
      type: String
    },
    age: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped></style>
