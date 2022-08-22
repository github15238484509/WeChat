import { createWebHistory, createRouter } from "vue-router"


let routes = [{
    path: "/",
    component: () => import("@/page/index.vue"),
    children: [
        {
            path: "/",
            component: () => import("@/page/children/index.vue"),
            meta: {
                IsShowSide: true
            }
        },
        {
            path: "chat/:id",
            name: "chat",
            component: () => import("@/page/children/chat/index.vue"),
            meta: {
                IsShowSide: true
            }
        }
    ],
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