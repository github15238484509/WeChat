let db = require("./db")
let DataTypes = require("sequelize")

let userGroup = db.define("userGroup", {
    meId: {
        type: DataTypes.UUID,
        allowNull: false,
        comment: '自己的id'
    },
    groupId: {
        type: DataTypes.UUID,
        allowNull: false,
        comment: '群聊的id'
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        comment: '和群聊的关系'
    },
    realNanme: {
        type: DataTypes.STRING,
        defaultValue: '',
        comment: '群聊的真实名字'
    }
})
module.exports = userGroup