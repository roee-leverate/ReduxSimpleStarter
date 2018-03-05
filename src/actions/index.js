import axios from 'axios'

const API_KEY = 'rcl132'
const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const KEY = `?key=${API_KEY}`

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST = 'FETCH_POST'
export const CREATE_POSTS = 'CREATE_POSTS'

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function fetchPost(id, callback) {
  const request = axios.post(`${ROOT_URL}/posts/${id}${KEY}`, values)
  .then(() => callback())

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${KEY}`, values)
  .then(() => callback())

  return {
    type: CREATE_POSTS,
    payload: request
  }
}
