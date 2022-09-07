
import getComponentRootDom from "./getComponentRootDom.js"
import LogOut from "@/components/logOut/index.vue"
import { resolveComponent, h } from "vue"
function showLogout() {
    return new Promise((resolve) => {
        let { el, app } = getComponentRootDom(LogOut, {
            startX: 465,
            slot:"899"
        })
        console.log(app);
        // requestAnimationFrame(() => {
        // el.addEventListener("transitionend", () => {
        resolve()
        //     app.unmount()
        // })
        // el.classList.add("active")
        // })
    })
}


export default {
    showLogout
}