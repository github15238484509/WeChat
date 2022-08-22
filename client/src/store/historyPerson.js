import { defineStore } from "pinia"
import { historyMessage } from "@/api/user.js"

export default defineStore("historyPerson", {
    state: () => {
        return {
            data: []
        }
    },
    actions: {
        async getHistoryPerson() {
            let result = await historyMessage()
            if (result.code === 0) {
                this.data = result.data
            }
        }
    },
    getters: {

    }
})