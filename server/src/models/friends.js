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
        type: DataTypes.BOOLEAN,
        allowNull: true,
        comment: '和朋友的关系'
    },
    realNanme: {
        type: DataTypes.STRING,
        defaultValue: '',
        comment: '朋友的备注'
    }
})
module.exports = friends