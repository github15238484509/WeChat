
let status = {
    401: '未登录,或登录过期',
}
exports.sendError = function (res, code, message) {
    res.status(code).json({
        code,
        message: message || status[code],
        data: null
    })
}
exports.sendOk = function (res, data, message) {
    res.json({
        code: 0,
        message: message || '请求成功',
        data
    })
}
exports.sendOkError = function (res, message) {
    res.json({
        code: -1,
        message: message || '请求失败',
        data: null
    })
}