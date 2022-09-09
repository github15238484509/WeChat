let uuid = require("../utils/uuid")
let FriendsMessage = require("../models/friendsMessage.js")
let filterObject = require("../utils/filterObj")

async function addMessage(data) {
    let okName = ["meId", "friendId", 'content', "type"]
    let result = await filterObject(data, okName)
    if (result.status) {
        let user = await FriendsMessage.create(result.data)
        return {
            data: user.toJSON(),
            status: result.status,
            message: '添加成功'
        }
    } else {
        return {
            data: null,
            status: result.status,
            message: result.message
        }
    }
}
module.exports.addMessage = addMessage