
let { verify } = require("../router/jwt")
let { sendError } = require("./sendCode")
function authorization(req, res, next) {
    let authorization = getAuthorization(req)
    if (!authorization) {
        return sendError(res, 401)
    }
    let result = verify(authorization.token)
    if (result.status) {
        req.id = result.data.id
        next()
    } else {
        result = verify(authorization.refresh_token)
        if (result.status) {
            req.id = result.data.id
            next()
        } else {
            return sendError(res, 401)
        }
    }
}

function getAuthorization(req) {
    let token = req.cookies.authorization
    let refresh_token = req.cookies.refresh_authorization
    if (token && refresh_token) {
        return {
            token,
            refresh_token
        }
    }
    token = req.headers.authorization
    refresh_token = req.headers.refresh_authorization
    if (token && refresh_token) {
        return {
            token,
            refresh_token
        }
    }
    return null
}
module.exports.authorization = authorization

