import Mock from 'mockjs'

let data = { token: 'ji', code: 1 }
Mock.mock('/api/login', 'post', data)
