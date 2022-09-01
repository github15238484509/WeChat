import axios from "axios";
import userStore from "@/store/user.js"

let instance = axios.create({
    timeout: 1000,
})
instance.interceptors.request.use((config) => {
    config.headers.authorization = localStorage.getItem("authorization")
    config.headers.refresh_authorization = localStorage.getItem("refresh_authorization")
    return config
})
instance.interceptors.response.use((config) => {
    return config.data
})

export default instance 