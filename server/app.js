let express = require("express")
let cookieParser = require('cookie-parser')
const app = express()

// let qn = require("./src/router/api/upload")
// const multipart = require('connect-multiparty')
// let qiniuUpload = require("./src/router/api/upload")
// let fs = require("fs")
// var dayjs = require('dayjs')
let config = require("./config")
let path = require("path")

let initSocket = require("./src/socket/index.js")

let userRouter = require("./src/router/api/user")
let messageRouter = require("./src/router/api/message")
let fridensRouter = require("./src/router/api/friend")
let { authorization } = require("./src/utils/authorization")

const public = path.resolve(__dirname, "./src/public")
app.use(express.static(public))
//解析请求的为 form表单请求
app.use(express.urlencoded({ extended: true }))
//解析请求的数据json
app.use(express.json({ extended: true }))
//解析cookie
app.use(cookieParser())

app.use("/api/user", userRouter)
app.use("/api/message",authorization, messageRouter)
app.use("/api/friend",authorization, fridensRouter)

app.all("*", function (req, res) {
    res.send("404")
})
let server = initSocket(app)
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
server.listen(config.port, function () {
    console.log(`http://localhost:${config.port}`);
})

// app.post("/upImg", multipart({ uploadDir: config.temp }), async function (req, res) {
//     let file = req.files.file
//     let filePath = file.path
//     let type = path.extname(file.originalFilename);
//     let name = `${dayjs().format('YYYY-MM-DD')}/${dayjs().format('HH:mm:ss')}-46-${type}`
//     let result = await qiniuUpload(name, filePath)
//     fs.unlinkSync(filePath)
//     res.send(result)
// })
