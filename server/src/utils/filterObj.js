module.exports = function (data, right = []) {
    return new Promise((resolve, reject) => {
        let obj = {}
        for (const key of right) {
            obj[key] = data[key] || resolve({
                status: false,
                data: null,
                message: `缺少字段${key}`
            })
        }
        resolve({
            status: true,
            data: obj,
            message: ''
        })
    })
}