<template>
  <div class="home">
    <cube-slide ref="slide"  :auto-play="false" :data="goodList" @change="changePage">
      <cube-slide-item
        v-for="(item) in goodList"
        :key="item.id"
        @click.native="clickHandler(item, index)"
      >
        <a href="#">
          <img :src="item.img" />
        </a>
      </cube-slide-item>
    </cube-slide>
    <good-list :gettersTest="gettersTest">
    </good-list>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import GoodList from '../components/GoodList'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    GoodList
  },
  mounted () {
    this.getGoodListAction()
  },
  computed: {
    ...mapState('goodStore', ['goodList']),
    ...mapGetters('goodStore', ['gettersTest'])
  },
  methods: {
    ...mapActions('goodStore', ['getGoodListAction']),
    changePage (current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler (item, index) {
      console.log(item, index)
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  .cube-slide{
    height: 142px;
    img{
      width: 100%;
    }
  }
}
</style>
