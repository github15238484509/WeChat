import axios from "axios";
import userStore from "@/store/user.js"

let instance = axios.create({
    timeout: 1000,
})
instance.interceptors.request.use((config) => {
    return config
})
instance.interceptors.response.use((config) => {
    return config.data
})

export default instance 