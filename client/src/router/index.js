import { createWebHistory, createRouter } from "vue-router"


let routes = [{
    path: "/",
    component: () => import("@/page/index.vue"),
    children: [
        {
            path: "/",
            name: "none",
            redirect: '/friend'
        },
        {//最近的聊天列表
            path: "/lately",
            name: "lately",
            component: () => import("@/page/children/lately/index.vue"),
            meta: {
                IsShowSide: true
            }
        },
        {//好友信息页面
            path: "friend/:id?",
            name: "friend",
            component: () => import("@/page/children/friend/index.vue"),
            meta: {
                IsShowSide: true
            }
        },
        {   //聊天页面
            path: "chat/:id",
            name: "chat",
            component: () => import("@/page/children/chat/index.vue"),
            meta: {
                IsShowSide: true
            }
        },
        {   //群组
            path: "group/:id",
            name: "group",
            component: () => import("@/page/children/chat/group.vue"),
            meta: {
                IsShowSide: true
            }
        },
        {   //朋友圈
            path: "circle",
            name: "circle",
            component: () => import("@/page/children/circle/index.vue"),
            meta: {
                IsShowSide: true
            }
        },
        {   //文件
            path: "file",
            name: "file",
            component: () => import("@/page/children/file/index.vue"),
            meta: {
                IsShowSide: true
            }
        },
        {   //文件
            path: "applet",
            name: "applet",
            component: () => import("@/page/children/applet/index.vue"),
            meta: {
                IsShowSide: true
            }
        }
        ,
        {   //收藏
            path: "collect",
            name: "collect",
            component: () => import("@/page/children/collect/index.vue"),
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