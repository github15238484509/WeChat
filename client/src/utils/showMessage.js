import getComponentRootDom from "./getComponentRootDom.js"
import Message from "@/common/message/index.vue"


export default function showMessage(option) {
    return new Promise((resolve) => {
        let el = getComponentRootDom(Message, option)
        requestAnimationFrame(() => {
            el.addEventListener("transitionend", () => {
                resolve()
            })
            el.classList.add("active")
        })
    })
}