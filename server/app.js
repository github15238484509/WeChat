let express = require("express")
const app = express()
let cookieParser = require('cookie-parser')
let userRouter = require("./src/router/api/user")


//解析请求的为 form表单请求
app.use(express.urlencoded({ extended: true }))
//解析请求的数据json
app.use(express.json({ extended: true }))
//解析cookie
app.use(cookieParser())
app.use("/api/user", userRouter)
app.all("*", function (req, res) {
    res.send("404")
})
app.listen(3000)