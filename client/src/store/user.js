import { defineStore } from "pinia"
import { whoami } from "@/api/user.js"
import useHistoryPerson from "./historyPerson.js"
async function setUserinfo(context, user) {
    context.user = user.data
    // 获取最近的聊天记录
    let HistoryPerson = useHistoryPerson()
    HistoryPerson.getHistoryPerson()
    // 获取用户列表
}
export default defineStore("userInfo", {
    state: () => {
        return {
            user: null,
            status: false
        }
    },
    actions: {
        login() {

        },
        logout() {

        },
        async whoami() {

            let token = localStorage.getItem("token") || 4656
            if (token === null) {
                return
            }
            this.status = "loading..."
            let result = await whoami(token)
            if (result.code === 0) {
                this.status = true
                setUserinfo(this, result)
            } else {
                this.status = false
            }
        }
    },
    getters: {
        token() {
            if (this.user) {
                return this.user.token
            }
            return null
        },
        name() {
            if (this.user) {
                return this.user.name
            }
            return null
        }
    }
})
