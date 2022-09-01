let uuid = require("../utils/uuid")
let User = require("../models/users")
let filterObject = require("../utils/filterObj")
async function addUser(data) {
    let okName = ["name", "account", 'password']
    let result = await filterObject(data, okName)
    if (result.status) {
        let newData = {
            id: uuid(),
            ...result.data
        }
        let user = await User.create(newData)
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
async function getUser(account) {
    if (!account) {
        return account
    }
    return await User.findOne({ where: { account: account } });
}

async function login(data) {
    let okName = ["account", 'password']
    let result = await filterObject(data, okName)
    if (result.status) {
        let user = await User.findOne({
            where: result.data,
            attributes: ["id", "name", "status","profile"]
        });
        if (user) {
            user.status = true
            user.save()
            return {
                data: user.toJSON(),
                status: result.status,
                message: '查找成功'
            }
        }
        return {
            data: null,
            status: false,
            message: "账号或者密码错误"
        }
    } else {
        return {
            data: null,
            status: result.status,
            message: result.message
        }
    }
}

async function logout(id) {
    if (!id) {
        return {
            data: null,
            status: false,
            message: "id为空"
        }
    }
    let user = await User.findOne({
        where: {
            id
        },
    });
    if (user) {
        user.status = false
        user.save()
        return {
            data: user.toJSON(),
            status: true,
            message: '退出成功'
        }
    }
    return {
        data: null,
        status: false,
        message: "用户不存在"
    }
}
async function whoami(id) {
    if (!id) {
        return {
            data: null,
            status: false,
            message: "id为空"
        }
    }
    let user = await User.findOne({
        where: {
            id
        },
        attributes: ["id", "name", "status","profile"]
    });
    if (user) {
        return {
            data: user.toJSON(),
            status: true,
            message: '查找成功'
        }
    }
    return {
        data: null,
        status: false,
        message: "用户不存在"
    }
}
module.exports.addUser = addUser
module.exports.getUser = getUser
module.exports.login = login
module.exports.logout = logout
module.exports.whoami = whoami
