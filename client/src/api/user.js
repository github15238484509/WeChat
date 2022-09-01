import server from "../utils/request";

// 获取用户列表
export function getFriendList() {
    return server.get("/api/friendList")
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
export function whoami() {
    return server.post("/api/user/whoami")
}
export function register(data) {
    return server.post("/api/user/register", data)
}
export function login(data) {
    return server.post("/api/user/login", data)
}
export function logout(data) {
    return server.post("/api/user/logout")
}
