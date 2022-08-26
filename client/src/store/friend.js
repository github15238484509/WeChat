import { defineStore } from "pinia"
import { getFriendList } from "@/api/user.js"
export default defineStore("friend", {
    state: () => {
        return {
            friend: []
        }
    },
    actions: {
        async getFriend() {
            let result = await getFriendList()
            if (result.code === 0) {
                this.friend = result.data
            }
        }
    },
    getters: {

    }
})