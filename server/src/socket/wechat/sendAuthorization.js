
module.exports = function (ws, data, wsList, fn) {
    if (ws.id) {
        return fn(ws, data, wsList)
    } else {
        throw new Error('请先验证socket')
    }
}