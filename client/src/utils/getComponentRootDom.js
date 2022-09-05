import { createApp } from "vue"
import router from "../router/index.js"
import { createPinia } from "pinia"
let body = document.body
let div = document.createElement("div")
export default function getComponentRootDom(root, option={}) {
    let app = createApp(root, option)
    let el = app.use(router).use(createPinia()).mount(div).$el
    body.appendChild(el)
    return {
        el,
        app
    }
}



