<template>
  <div>
    Child1==>{{ id }}
    <router-link to="/parent/child1/2121">参数1</router-link>
    <router-link to="/parent/child1/9999">参数2</router-link>
  </div>
  <!-- <div>Child1==>{{ this.$route.params.id }}</div> -->
</template>

<script>
export default {
  name: 'Child1',
  props: {
    id: {
      type: String
    }
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('update')
    next()
  },
  beforeRouteLeave (to, from, next) {
    next()
  }
}
</script>

<style lang="scss" scoped></style>
