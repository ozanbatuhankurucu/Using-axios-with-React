import axios from 'axios'

export const authFetch = axios.create({
  baseURL: 'https://course-api.com'
})
// Add a request interceptor
authFetch.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log('%c -----config----- ', 'background: #FF0000')
    console.log(config)
    console.log('%c -----config----- ', 'background: #FF0000')

    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
authFetch.interceptors.response.use(
  function (interceptorResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('%c -----interceptorResponse----- ', 'background: #FF0000')
    console.log(interceptorResponse)
    console.log('%c -----interceptorResponse----- ', 'background: #FF0000')

    return interceptorResponse
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)
