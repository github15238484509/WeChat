import { defineStore } from "pinia"
import { whoami, login as UserLogin, register as UserRegister, logout as UserLogout } from "@/api/user.js"
import useHistoryLately from "./historyLately.js"
import useFriend from "./friend.js"
import md5 from "md5"
import showMessage from "@/utils/showMessage.js"
import initSocket from "@/socket/index.js"
import router from "@/router"
async function setUserinfo(context, user) {
    context.user = user.data
    initSocket()
    // 获取最近的聊天记录
    let HistoryPerson = useHistoryLately()
    HistoryPerson.getHistoryLately()
    // 获取用户列表
    let friend = useFriend()
    friend.getFriend()
}
export default defineStore("userInfo", {
    state: () => {
        return {
            user: null,
            status: false
        }
    },
    actions: {
        async login(data) {
            this.status = "loading..."
            let result = await UserLogin({
                ...data,
                password: md5(data.password)
            })
            if (result.code === 0) {
                this.status = true
                setUserinfo(this, result)
            } else {
                this.status = false
            }
        },
        async register(data) {
            let newData = {
                account: data.account,
                name: data.name,
                password: md5(data.password),
            }
            let reuslt = await UserRegister(newData)
            if (reuslt.code === 0) {
                showMessage({
                    type: "success",
                    text: '注册成功',
                })
            }
        },
        async logout() {
            let reuslt = await UserLogout()
            if (reuslt.code === 0) {
                showMessage({
                    type: "success",
                    text: '退出成功',
                })
                localStorage.removeItem("authorization")
                localStorage.removeItem("refresh_authorization")
            }
        },
        async whoami() {
            this.status = "loading..."
            let result = await whoami()
            if (result.code === 0) {
                this.status = true
                setUserinfo(this, result)
            } else {
                this.status = false
                router.push("/login")
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
