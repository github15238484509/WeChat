
//这个页面是用户退出后后接回执行的函数所有函数
let loopFn = {
    //通知好友我了我离线了
    informFriendOnline() {

    }
}

module.exports = function (ws) {
    for (const fn in loopFn) {
        loopFn[fn](ws)
    }
}