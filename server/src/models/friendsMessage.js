let db = require("./db")
let DataTypes = require("sequelize")

let friendsMessage = db.define("friendsMessage", {
    meId: {
        type: DataTypes.UUID,
        allowNull: false,
        comment: '自己的id'
    },
    friendId: {
        type: DataTypes.UUID,
        allowNull: false,
        comment: '朋友的id'
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:false,
        comment: '消息的状态'
    },
    content: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '消息的内容'
    },
    type:{
        type: DataTypes.STRING,
        allowNull: true,
        comment: '消息的内容'
    }
})
module.exports = friendsMessage