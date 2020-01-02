<template>
  <div class="cart">
    <h1 class="title">亚信购物车</h1>
    <section class="add-course">
      <h3>添加课程</h3>
      <div class="add-course-item course-name">
        <label>
          课程名称：
          <input type="text" v-model="courseName" />
        </label>
      </div>
      <div class="add-course-item course-price">
        <label>
          课程价格：
          <input type="text" v-model="coursePrice" />
        </label>
      </div>
      <button @click="addCourseToList">添加课程到课程列表</button>
    </section>
    <section class="course-list">
      <h3>课程列表</h3>
      <section class="course-table-box">
        <section class="table-common-item hd">
          <span>课程名称</span>
          <span>课程价格</span>
          <span>操作</span>
        </section>
        <section class="bd">
          <template v-if="courseList.length > 0">
            <section
              class="table-common-item table-item"
              :key="index"
              v-for="(item, index) in courseList"
            >
              <span>{{ item.courseName }}</span>
              <span>{{ item.coursePrice }}</span>
              <span
                ><button @click="addCourseToCart(item)">
                  添加至购物车
                </button></span
              >
            </section>
          </template>
        </section>
      </section>
    </section>
    <section class="cart-list">
      <h3>购物车</h3>
      <section class="course-table-box">
        <section class="table-common-item hd">
          <span>勾选</span>
          <span>课程名称</span>
          <span>课程价格</span>
          <span>数量</span>
          <span>价格</span>
        </section>
        <section class="bd">
          <template v-if="courseCartList.length > 0">
            <section
              class="table-common-item table-item"
              v-for="(item, index) in courseCartList"
              :key="index"
            >
              <span><input type="checkbox" v-model="item.isChecked"/></span>
              <span>{{ item.courseName }}</span>
              <span>{{ item.coursePrice }}</span>
              <span>
                <button @click="minusCartCount(index)">-</button>
                {{ item.count }}
                <button @click="addCartCount(index)">+</button>
              </span>
              <span>{{ item.coursePrice * item.count }}</span>
            </section>
          </template>
        </section>
      </section>
    </section>
    <h3>总价：{{ totalPrice }}</h3>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      courseName: '',
      coursePrice: '',
      courseList: [],
      courseCartList: []
    }
  },
  computed: {
    totalPrice () {
      let totalPrice = 0
      this.courseCartList.forEach(item => {
        if (item.isChecked) {
          totalPrice += item.coursePrice * item.count
        }
      })
      return totalPrice
    }
  },
  methods: {
    addCourseToList () {
      let course = {
        courseName: this.courseName,
        coursePrice: this.coursePrice
      }
      this.courseList.unshift(course)
      this.courseName = ''
      this.coursePrice = ''
    },
    addCourseToCart (item) {
      let flagIndex = this.courseCartList.findIndex(ii => {
        return item.courseName === ii.courseName
      })
      if (flagIndex !== -1) {
        let flagItem = this.courseCartList[flagIndex]
        flagItem.count++
        this.courseCartList.splice(flagIndex, 1, flagItem)
      } else {
        let newItem = { ...item, count: 1, isChecked: false }
        this.courseCartList.unshift(newItem)
      }
    },
    minusCartCount (index) {
      if (this.courseCartList[index].count === 0) {
        if (window.confirm('确定要删除吗？')) {
          this.courseCartList.splice(index, 1)
          return
        }
      }
      this.$set(
        this.courseCartList[index],
        'count',
        --this.courseCartList[index].count
      )
    },
    addCartCount (index) {
      this.$set(
        this.courseCartList[index],
        'count',
        ++this.courseCartList[index].count
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  padding: 10px 20px;
  .title {
    text-align: center;
  }
  .add-course {
    .add-course-item {
      margin: 10px 0;
    }
  }
  .course-list,
  .cart-list {
    margin-top: 20px;
    h3 {
      margin-bottom: 7px;
    }
    .course-table-box {
      .table-common-item {
        display: flex;
        width: 600px;
        padding: 5px 0px;
        span {
          flex: 1;
        }
      }
      .hd {
        span {
          font-weight: 800;
        }
      }
    }
  }
}
</style>
