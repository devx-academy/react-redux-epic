import axios from 'axios'

export const serverUrl = 'https://jsonplaceholder.typicode.com'

export const axiosApi = axios.create({
  baseURL: `${serverUrl}`,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
    'time-zone': 'Europe/Prague',
  },
})

const setHeader = (name, value) => {
  if (value) {
    axios.defaults.headers.common[name] = value
  } else {
    delete axios.defaults.headers.common[name]
  }
}

const endpoints = (api) => {
  return {
    // get
    getPosts: () => api.get('/posts'),
    getOnePost: (id) => api.get(`/posts/${id}`),

    serverUrl,
    setHeader,
  }
}

export const rawEndpoints = endpoints

export default endpoints(axiosApi)
