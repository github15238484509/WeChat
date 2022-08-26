let express = require("express")
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('database', 'username', '123456', {
    host: 'localhost',
    dialect: "mysql"
});
const app = express()

app.get("/", (req, res) => {
    res.send("456")
})

app.listen(3000)