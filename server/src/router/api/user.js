let router = require("express").Router()
let { addUser, getUser, login, logout, whoami, searchUser } = require("../../services/user")
let { sendError, sendOk, sendOkError } = require("../../utils/sendCode")
let filterObject = require("../../utils/filterObj.js")
let { publish, clearPublish } = require("../jwt.js")
let { authorization } = require("../../utils/authorization")
router.post("/login", async function (req, res) {
    let body = req.body
    let okName = ["account", 'password']
    let result = await filterObject(body, okName)
    if (!result.status) {
        return sendOkError(res, result.message)
    }
    result = await login(result.data)
    if (result.status) {
        publish(res, { id: result.data.id })
        return sendOk(res, result.data, result.message)
    } else {
        return sendOkError(res, result.message)
    }
})

router.post("/logout", authorization, async function (req, res) {
    let id = req.id
    if (id) {
        let user = await logout(id)
        if (!user.status) {
            return sendOkError(res, user.message)
        }
        clearPublish(res)
        return sendOkError(res, user.message)
    } else {
        return sendOkError(res, '退出失败')
    }
})

router.post("/whoami", authorization, async function (req, res) {
    let id = req.id
    if (id) {
        let result = await whoami(id)
        if (!result.status) {
            return sendOkError(res, result.message)
        }
        publish(res, { id: result.data.id })
        return sendOk(res, result.data, result.message)
    } else {
        return sendOkError(res, '查找失败')
    }
})

router.post("/register", async function (req, res) {
    let body = req.body
    let okName = ["name", "account", 'password']
    let result = await filterObject(body, okName)
    if (!result.status) {
        return sendOkError(res, result.message)
    }
    result = await getUser(body.account)
    if (result) {
        return sendOkError(res, "此用户已存在")
    }
    result = await addUser(body)
    if (result.status) {
        return sendOk(res, null, result.message)
    } else {
        return sendOkError(res, result.message)
    }
})


router.get("/searchUser",authorization, async function (req, res) {
    let body = req.query
    let okName = ["account"]
    let result = await filterObject(body, okName)
    if (!result.status) {
        return sendOkError(res, result.message)
    }
    result = await searchUser(result.data.account,req.id)
    return sendOk(res, result.data, result.message)
})




module.exports = router