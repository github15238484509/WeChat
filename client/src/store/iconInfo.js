import { defineStore } from "pinia"
export default defineStore("iconInfo", {
    state: () => {
        return {
            topIcon: [{
                icon: "message",
                path: '/lately',
                num: 0,
            },
            {
                icon: "haoyou",
                path: '/friend',
                num: 0
            },
            {
                icon: "pengyouquan",
                path: '/circle',
                num: 0
            },
            {
                icon: "shoucang",
                path: '/collect',
                num: 0
            }],
            bottomIcon: [{
                icon: "file",
                path: '/file',
                num: 0
            },
            {
                icon: "xiaochengxu",
                path: '/applet',
                num: 0
            },
            {
                icon: "tuichu",
                path: '',
                num: 0,
                fn:'showLogout'
            },
        ]
        }
    },
    actions: {
        cahngeNum(name, id, num) {

        },
        pushIcon(name, data) {

        }
    },
    getters: {

    }
})