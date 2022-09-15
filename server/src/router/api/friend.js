let router = require("express").Router()
let { addSingleFriend, approve, getNewFrind } = require("../../services/friend")
let { sendError, sendOk, sendOkError } = require("../../utils/sendCode")
let filterObject = require("../../utils/filterObj.js")
const multipart = require('connect-multiparty')
let config = require("../../../config")
let path = require("path")

let qiniuUpload = require("./upload")
let fs = require("fs")
var dayjs = require('dayjs')

let { wss } = require("../../socket/wechat/index")
let { messageHandle } = require("../../socket/wechat/message.js")

// 添加好友
router.get("/addFriend", async function (req, res) {
    let id = req.query.id
    //status 0代表添加中，1：同意，2：拒绝
    let MyInfo = {
        meId: req.id,
        friendId: id,
        status: "1",
        realStatus: false
    }
    let FriendInfo = {
        meId: id,
        friendId: req.id,
        status: "0",
        realStatus: false
    }
    let result = await addSingleFriend(MyInfo, FriendInfo)
    if (result.status) {
        wss.clients.forEach((item) => {
            if (item.id === id) {
                messageHandle.addFriend(item)
            }
        })
        return sendOk(res, null, result.message)
    } else {
        return sendOkError(res, result.message)
    }
})
// 同意好友
router.get("/approveFriend", async function (req, res) {
    let id = req.query.id
    if (!id) {
        return sendOkError(res, '请传递好友id')
    }
    let result = await approve(req.id, id)
    if (result.status) {
        wss.clients.forEach((item) => {
            if (item.id === id) {
                messageHandle.approveFriend(item, result.data.me)
            }
            if (item.id === req.id) {
                messageHandle.approveFriend(item, result.data.friend)
            }
        })
        return sendOk(res, null, result.message)
    } else {
        return sendOkError(res, result.message)
    }
})
router.get("/newfriend", async function (req, res) {
    let id = req.id
    let result = await getNewFrind(id)
    if (result.status) {
        return sendOk(res, result.data, result.message)
    } else {
        return sendOkError(res, result.message)
    }
})



module.exports = router