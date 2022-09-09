import getComponentRootDom from "./getComponentRootDom.js"
import UserInfo from "@/common/UserInfo/index.vue"
import { defineComponent, h, createApp } from "vue"
let body = document.body
let div = document.createElement("div")
body.appendChild(div)
export default function showUserInfo(option) {
    return new Promise((resolve) => {
        let a = defineComponent({
            render() {
                return h(UserInfo, option)
            }
        })
        createApp(a).mount(div)
        // console.log(el, app);
        // el.style.position = 'fixed'
        // el.style.left = '200px'
        // el.style.top = '200px'
    })
}