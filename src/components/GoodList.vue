<template>
  <div class="good-list-box">
    goodList
    <h1>{{ gettersTest }}</h1>
  </div>
</template>

<script>
export default {
  name: 'goodList',
  props: {
    gettersTest: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.good-list-box {
  // height: 100%;
}
</style>
