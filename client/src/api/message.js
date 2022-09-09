import server from "../utils/request";

// 单人聊天
export function singleChat(data) {
    return server.post('/api/message/singleChat', data)
}