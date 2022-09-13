let db = require("./db")
let DataTypes = require("sequelize")

let friends = db.define("friends", {
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
        type: DataTypes.TEXT,
        allowNull: true,
        comment: '与朋友的状态，0代表添加中，1：同意，2：拒绝'
    },
    realStatus:{
        type: DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull: false,
        comment: '是否是好友'
    },
    realNanme: {
        type: DataTypes.STRING,
        defaultValue: '',
        comment: '朋友的备注'
    }
})
module.exports = friends