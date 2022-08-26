import { defineStore } from "pinia"
import { historyMessage } from "@/api/user.js"

export default defineStore("historyLately", {
    state: () => {
        return {
            data: []
        }
    },
    actions: {
        async getHistoryLately() {
            let result = await historyMessage()
            if (result.code === 0) {
                this.data = result.data
            }
        }
    },
    getters: {

    }
})