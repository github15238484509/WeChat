import { createWebHistory, createRouter } from "vue-router"


let routes = [{
    path: "/",
    component: () => import("@/page/index.vue"),
    // children: [
    // ],
},
{
    path: "/login",
    component: () => import("@/page/children/login.vue"),
}]
let router = createRouter({
    history: createWebHistory(),
    routes
})
export default router