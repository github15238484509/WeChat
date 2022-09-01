
let { verify } = require("../router/jwt")
let { sendError } = require("./sendCode")
function authorization(req, res, next) {
    let token = getAuthorization(req)
    if (!token) {
        return sendError(res, 401)
    }
    let result = verify(token)
    if (result.status) {
        req.id = result.data.id
        next()
    } else {
        return sendError(res, 401)
    }
}

function getAuthorization(req) {
    let token = req.cookies.authorization
    if (token) {
        return token
    } else {
        return req.headers.authorization
    }
}
module.exports.authorization = authorization

