import server from "../utils/request";

// 获取用户列表
export function getUsersList() {
    return server.get("/api/usersList")
}
// 获取最近的聊天信息
export function historyMessage() {
    return server.get("/api/historyList")
}
// 获取一个用户的连天记录
export function userHistory() {
    return server.get("/api/user/history")
}

//whoIam
export function whoami(data) {
    return server.post("/api/user/whoami",data)
}