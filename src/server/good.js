import axios from 'axios'

export default {
  getGoodsInfo () {
    return axios.get('/api/goods').then(res => {
      const { status, list } = res.data
      if (status) {
        return list
      } else {
        return null
      }
    })
  }
}
