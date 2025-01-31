import axios, { AxiosError } from 'axios'

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 30000,
  withCredentials: true
})

instance.interceptors.request.use(
  async function (config) {
    // const accessToken = localStorage.getItem('access_token')
    // const accessToken = getCookie('OAUTH_TOKEN')
    // if (accessToken) {
    //   config.headers['oauth-token'] = accessToken
    //   config.headers['X-Not-Using-Xquare-Auth'] = 'true'
    // }
    return config
  },
  function (error: AxiosError) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(undefined, function (error) {
  throw error
})
