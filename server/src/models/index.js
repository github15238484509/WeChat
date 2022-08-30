const db = require("./db")
let users = require("./users")
let groups = require("./groups")
let friends = require("./friends")
let userGroup = require("./userGroup")
let friendsMessage = require("./friendsMessage")
async function de() {
    await db.sync({
        alert: true
    }) //同步表
    console.log('同步成功');
}
de()