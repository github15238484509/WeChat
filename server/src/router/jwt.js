let jwt = require("jsonwebtoken")
let secret = "shuaige"
exports.publish = function (res, info = {}, maxAge = 3600) {
    const token = jwt.sign(info, secret, {
        expiresIn: maxAge * 1000
    })
    res.cookie("authorization", token, {
        maxAge: maxAge * 1000,
        path: "/"
    })
    res.header("authorization", token)
}
exports.verify = function (authorization) {
    try {
        return {
            status:true,
            data:jwt.verify(authorization, secret),
        }
    } catch (error) {
        return {
            status:false,
            data:null,
            message:error.message
        }
    }
}