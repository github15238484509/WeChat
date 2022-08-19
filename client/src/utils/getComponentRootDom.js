import { createApp } from "vue"
let body = document.body
let div = document.createElement("div")
export default function getComponentRootDom(root, option) {
    let el = createApp(root, option).mount(div).$el
    body.appendChild(el)
    return el
}



