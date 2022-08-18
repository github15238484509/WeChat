import { defineStore } from "pinia"
export default defineStore("iconInfo", {
    state: () => {
        return {
            topIcon: [{
                icon: "message",
                path: '',
                num: 0,
            },
            {
                icon: "haoyou",
                path: '',
                num: 0
            },
            {
                icon: "pengyouquan",
                path: '',
                num: 0
            },
            {
                icon: "shoucang",
                path: '',
                num: 0
            }],
            bottomIcon: [{
                icon: "file",
                path: '',
                num: 0
            },
            {
                icon: "xiaochengxu",
                path: '',
                num: 0
            },]
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