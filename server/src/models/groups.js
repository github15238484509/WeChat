let db = require("./db")
let { DataTypes } = require("sequelize")

module.exports = db.define("groups", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    notice: {
        type: DataTypes.STRING,
    },
    member:{
        type: DataTypes.STRING,
        defaultValue:"[]",
        comment:'群成员'
    }
})