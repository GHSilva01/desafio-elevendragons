import axios from 'axios'

const users = axios.create({
  baseURL: 'https://gorest.co.in/public/v2/users',
  headers: {
    'content-type':'application/json;charset=utf-8',
  }
})

export default users