import axios from 'axios'

/**
 * Instance
 */
//  "http://localhost:8080/"
const instance = axios.create({
    baseURL: process.env.api
})
instance.defaults.headers.common['Content-Type'] = 'application/json'
// instance.defaults.headers.common['Authorization'] = 'application/json'
/**
 * Request
 */
instance.interceptors.request.use(
    async (config) => {
        return config
    },
    (error) => {
        Promise.reject(error).then()
    }
)

/**
 * Response
 */
instance.interceptors.response.use(
    (response) => {
        return response
    },
    async (error) => {
        return Promise.reject(error)
    }
)

export default instance
