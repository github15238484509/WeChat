import axios from "axios";
import userStore from "@/store/user.js"
import showMessage from "./showMessage.js"
import router from "@/router/index.js"
let instance = axios.create({
    timeout: 1000,
})
instance.interceptors.request.use((config) => {
    config.headers.authorization = localStorage.getItem("authorization")
    config.headers.refresh_authorization = localStorage.getItem("refresh_authorization")
    return config
})
instance.interceptors.response.use((config) => {
    if (config.data.code === -1) {
        showMessage({
            type: 'error',
            text: config.data.message,
            duration: 1500
        })
    }
    let authorization = config.headers.authorization
    let refresh_authorization = config.headers.refresh_authorization
    if (authorization && refresh_authorization) {
        localStorage.setItem("authorization", authorization)
        localStorage.setItem("refresh_authorization", refresh_authorization)
    }
    return config.data
}, (error) => {
    let data = error.response
    if (data.status === 401) {
        router.push({
            path: '/login',
            query: {
                redirect: router.currentRoute.fullPath
            }
        }).then(() => {
            showMessage({
                type: 'error',
                text: data.data.message,
                duration: 1000
            })
        })
    }
    return data.data
})

export default instance 