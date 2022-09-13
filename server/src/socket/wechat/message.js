let authorizationSocket = require("./sendAuthorization.js")
let loopList = require("./loop")
let { verify } = require("../../router/jwt")
let SocketFnList = {
    authorization(ws, data) {
        let result = verify(data.authorization)
        if (!result.status) {
            result = verify(data.refresh_token)
            if (!result.status) {
                return sendErrorMessage(ws, null, result.message, "")
            }
        }
        let id = result.data.id
        ws.id = id
        sendOkMessage(ws, null, "authorization")
        loopList(ws)
    },
    ping(ws) {
        sendOkMessage(ws, null, "ping")
    },
    //添加好友
    addFriend(ws){
        sendOkMessage(ws, null, "addFriend")
    },
    //好友同意
    approveFriend(ws,data){
        sendOkMessage(ws, data, "approveFriend")
    }
}
module.exports.messageHandle = SocketFnList
module.exports.message = function (ws, data, wsList) {
    let newData = null
    try {
        newData = JSON.parse(data.toString())
        if (typeof newData === "object") {
            let fn = SocketFnList[newData.type]
            if (fn) {
                if (newData.type === "authorization") {
                    fn(ws, newData.data, wsList)
                } else {
                    authorizationSocket(ws, newData.data, wsList, fn)
                }
            } else {
                throw new Error(`${newData.type}没有此处理程序`)
            }
        } else {
            throw new Error("格式不正确")
        }
    } catch (error) {
        sendErrorMessage(ws, newData, error.message, "")
    }
}

function sendOkMessage(ws, data, type) {
    ws.send(JSON.stringify({
        code: 0,
        data: data,
        type
    }))
}
function sendErrorMessage(ws, data, message, type) {
    ws.send(JSON.stringify({
        code: 0,
        message: message,
        data: data,
        type
    }))
}