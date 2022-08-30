let uuid = require("../utils/uuid")
let User = require("../models/users")
let filterObject = require("../utils/filterObj")
async function addUser(data) {
    let okName = ["name", "account", 'password']
    let result = await filterObject(data, okName)
    if (result.status) {
        let newData = {
            id: uuid(),
            ...result
        }
        let user = await User.create(newData)
        return {
            data: user.toJSON(),
            status: result.status,
            message: ''
        }
    } else {
        return {
            data: null,
            status: result.status,
            message: result.message
        }
    }
}

module.exports.addUser = addUser

addUser({
    password: "132",
    account: '852'
}).then((e) => {
    console.log(e);
})