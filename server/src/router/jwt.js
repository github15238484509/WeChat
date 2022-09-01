let jwt = require("jsonwebtoken")
let secret = "shuaige"
exports.publish = function (res, info = {}, maxAge = 3600) {
    const token = jwt.sign(info, secret, {
        expiresIn: maxAge * 1000
    })
    const refresh_token = jwt.sign(info, secret, {
        expiresIn: maxAge * 1000 * 2
    })
    res.cookie("authorization", token, {
        maxAge: maxAge * 1000,
        path: "/"
    })
    res.cookie("refresh_authorization", refresh_token, {
        maxAge: maxAge * 1000 * 2,
        path: "/"
    })
    res.header("authorization", token)
    res.header("refresh_authorization", refresh_token)
}
exports.clearPublish = function (res) {
    res.cookie("authorization", "", {
        maxAge: 0,
        path: "/"
    })
    res.cookie("refresh_authorization", "", {
        maxAge: 0 * 2,
        path: "/"
    })
    res.header("authorization", "")
    res.header("refresh_authorization", "")
}
exports.verify = function (authorization) {
    try {
        return {
            status: true,
            data: jwt.verify(authorization, secret),
        }
    } catch (error) {
        return {
            status: false,
            data: null,
            message: error.message
        }
    }
}