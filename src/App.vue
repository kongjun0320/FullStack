<template>
  <div id="app">
    <transition name="route-move">
      <router-view class="view-box" />
    </transition>
    <nav class="foot-nav">
      <template>
        <cube-tab-bar
          v-model="selectedLabelDefault"
          :data="tabs"
          @click="clickHandler"
          @change="changeHandler"
        >
        </cube-tab-bar>
      </template>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedLabelDefault: 'Home',
      tabs: [
        {
          label: 'Home',
          value: '/home',
          icon: 'cubeic-home'
        },
        {
          label: 'Cart',
          value: '/cart',
          icon: 'cubeic-like'
        },
        {
          label: 'Me',
          value: '/me',
          icon: 'cubeic-vip'
        }
      ]
    }
  },
  created () {
    this.selectedLabelDefault = this.$route.path
  },
  watch: {
    $route (route) {
      this.selectedLabelDefault = route.path
    }
  },
  methods: {
    clickHandler (value) {
      // if you clicked home tab, then print 'Home'
    },
    changeHandler (value) {
      this.$router.push(value)
      // if you clicked different tab, this methods can be emitted
    }
  }
}
</script>
<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .route-move-enter{
    transform: translate3d(-100%,0,0)
  }
  .route-move-leave-to{
     transform: translate3d(100%,0,0)
  }
  .route-move-enter-active,.route-move-leave-active{
    transition: all 0.3s;
  }
  .view-box{
    flex: 1;
  }
  .foot-nav{
    height: 46px;
  }
  .cube-tab-bar{
    background-color: #eee;
  }
}
</style>
