const db = require("./db")
const { DataTypes } = require("sequelize")
const ClassGrand = db.define("users", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    account: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    profile: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:'https://cn.vitejs.dev/logo.svg'
    }
}, {
    paranoid: true
})
module.exports = ClassGrand