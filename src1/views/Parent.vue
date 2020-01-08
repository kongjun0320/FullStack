<template>
  <div>
    <h2>parent</h2>
    <!-- <router-link to='/parent/1'>toChild1</router-link> -->
    <router-link :to="{ name: 'child1', params: { id: '123' } }">toChild1</router-link>
    <router-link to="/parent/child2?name=kb&age=21">toChild2</router-link>
    <router-view />
    <!-- <router-view name="heh" /> -->
  </div>
</template>

<script>
export default {
  name: 'Parent',
  mounted () {

  }
}
</script>

<style lang="scss" scoped></style>
