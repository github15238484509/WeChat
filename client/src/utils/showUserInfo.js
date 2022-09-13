import getComponentRootDom from "./getComponentRootDom.js"
import UserInfo from "@/common/UserInfo/index.vue"
import { defineComponent, h, createApp, withModifiers } from "vue"
import iterator from "@/utils/iterator"

let body = document.body
let flage = null
export default function showUserInfo(option) {
    if(flage)return
    let div = document.createElement("div")
    flage =div
    div.style.position = 'fixed'
    div.style.background = 'white'
    div.style.zIndex = iterator.next()
    div.style.left = option.left ? `${option.left}px` : '50%'
    div.style.top = option.top ? `${option.top}px` : '50%'
    let props = {
        btnText: option.btnText,
        name: option.name,
        profile: option.profile,
        nameList: option.nameList,
        onClick: withModifiers((...arg) => {
            option.onClick && option.onClick(div, arg)
            flage = null
        }, [])
    }
    return new Promise((resolve) => {
        let dom = defineComponent({
            render() {
                return h(UserInfo, props)
            }
        })
        body.appendChild(div)
        createApp(dom).mount(div)
        resolve(div)
    })
}