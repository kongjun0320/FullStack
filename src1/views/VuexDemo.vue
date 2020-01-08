<template>
  <div>
    <!-- hello vuex=={{ handleCount }}
    {{ $store.state.count }}
    <button @click="increment(2)">添加</button>
    <button @click="decrement">减少</button> -->
  <h1>{{ a }}</h1>
  <h1>{{ b }}</h1>
    <h3>{{ $store.state.countStore.count }}</h3>
    <h3>{{ $store.state.numberStore.count }}</h3>

     <button @click="increment">添加</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'VuexDemo',
  computed: {
    ...mapState('countStore', {
      a: state => state.count
    }),
    ...mapState('numberStore', {
      b: state => state.count
    })
  },
  methods: {
    ...mapActions('countStore', ['increment'])
  }
}
</script>

<style lang="scss" scoped></style>
