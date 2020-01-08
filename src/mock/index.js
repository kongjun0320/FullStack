import Mock from 'mockjs'

let data = { token: 'ji', code: 1 }
let goodData = {
  status: 1,
  list: [
    {
      id: 1,
      name: 'kobe',
      img: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
    },
    {
      id: 2,
      name: 'lebron',
      img: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
    },
    {
      id: 3,
      name: 'rose',
      img: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
    },
    {
      id: 4,
      name: 'iverson',
      img: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
    }
  ]
}
Mock.mock('/api/login', 'post', data)
Mock.mock('/api/goods', 'get', goodData)
