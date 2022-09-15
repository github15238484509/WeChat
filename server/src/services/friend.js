let uuid = require("../utils/uuid")
let Friends = require("../models/friends.js")
let { whoami } = require("./user")
let filterObject = require("../utils/filterObj")
let { Op } = require("sequelize")
// 单方面的添加好友
async function addSingleFriend(MyInfo, FriendInfo) {
    let okName = ["meId", "friendId", 'status']
    //status 0代表添加中，1：同意，2：拒绝
    let result = await filterObject(MyInfo, okName)
    let result1 = await filterObject(FriendInfo, okName)
    if (result.status && result1.status) {
        //看看是不是重复添加
        let info = await Friends.findOne({
            where: {
                meId: result1.data.meId,
                friendId: result1.data.friendId,
            }
        })
        if (info !== null) {
            let infoResult = info.toJSON()
            if (infoResult.status === "2") {
                info.status = "0"
                info.save()
                return {
                    data: info.toJSON(),
                    status: true,
                    message: '添加中'
                }
            } else if (infoResult.status === "1") {
                return {
                    data: null,
                    status: false,
                    message: '你们已经是好友了'
                }
            } else {
                return {
                    data: null,
                    status: true,
                    message: '等待对方同意'
                }
            }
        }
        Friends.create(result1.data)
        let user = await Friends.create(result.data)
        return {
            data: user.toJSON(),
            status: result.status,
            message: '添加中'
        }
    } else {
        return {
            data: null,
            status: result.status && result1.status,
            message: result.message + result1.message
        }
    }
}

// 同意好好友
async function approve(meId, friendId) {
    let friend = await Friends.findOne({
        where: {
            meId: friendId,
            friendId: meId,
        }
    })
    let me = await Friends.findOne({
        where: {
            meId: meId,
            friendId: friendId,
        }
    })
    if (friend && me) {
        friend = friend.toJSON()
        me = friend.me()
        if (me.status === "0" && friend === "1") {
            me.status = "1"
            friend.status = "1"
            me.realStatus = true
            friend.realStatus = true
            me.save()
            friend.save()
            return {
                data: {
                    me: me.toJSON(),
                    friend: friend.toJSON(),
                },
                status: true,
                message: '已同意'
            }
        } else {
            return {
                data: null,
                status: false,
                message: '请勿重复操作'
            }
        }
    } else {
        return {
            data: null,
            status: false,
            message: '没有查到此人'
        }
    }
}

let cache = {}
async function getNewFrind(id) {
    let {count,rows} = await Friends.findAndCountAll({
        where: {
            friendId: id,
        },
        limit: 100 ,
        attributes: [["meId","friendId"], "realNanme", "realStatus", "status"]
    })
        let sendData = { rows: [] }
        sendData.count = count
        for (const item of rows) {
            let toJSON = item.toJSON()
            if (!cache[toJSON.friendId]) {
                let { data: { name, profile } } = await whoami(toJSON.friendId)
                cache[toJSON.friendId] = { name, profile }
            }
            toJSON = {
                ...toJSON,
                ...cache[toJSON.friendId]
            }
            sendData.rows.push(toJSON)
        }
        return {
            message: '查找成功',
            data: sendData,
            status: true
        }
}

module.exports.addSingleFriend = addSingleFriend
module.exports.approve = approve
module.exports.getNewFrind = getNewFrind