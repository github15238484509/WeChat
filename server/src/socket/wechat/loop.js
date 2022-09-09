//这个页面是用户登陆后接回执行的函数所有函数
let loopFn = {
    //离线添加好友
    offlineAdd() {
        // console.log(4656);
    },
    //离线删除好友
    offlineDelete() {
        // console.log(4656);
    },
    //离线朋友消息
    offlineFriendMessage() {
        // console.log(4656);
    },
    //离线添加群聊
    offlineAddGroup() {
        // console.log(4656);
    },
    //离线移除群聊
    offlineRemoveGroup() {
        // console.log(4656);
    },
    //通知好友我在线了
    informFriendOnline() {

    }
}

module.exports = function (ws) {
    for (const fn in loopFn) {
        loopFn[fn](ws)
    }
}