import server from "../utils/request";

// 获取用户列表
export function getFriendInfo(id) {
    return server.get(`/api/friend/${id}`)
}

export function addFriend(id) {
    return server.get(`/api/friend/addFriend?id=${id}`)
}