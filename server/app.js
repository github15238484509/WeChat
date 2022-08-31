let express = require("express")
let cookieParser = require('cookie-parser')
let userRouter = require("./src/router/api/user")
let path = require("path")
let config = require("./config")
let qn = require("./src/router/api/upload")
const multipart = require('connect-multiparty')

let qiniuUpload = require("./src/router/api/upload")
let fs = require("fs")
var dayjs = require('dayjs')
const app = express()
const public = path.resolve(__dirname, "./src/public")
app.use(express.static(public))
//解析请求的为 form表单请求
app.use(express.urlencoded({ extended: true }))
//解析请求的数据json
app.use(express.json({ extended: true }))
//解析cookie
app.use(cookieParser())

app.post("/upImg", multipart({ uploadDir: config.temp }), async function (req, res) {
    let file = req.files.file
    let filePath = file.path
    let type = path.extname(file.originalFilename);
    let name = `${dayjs().format('YYYY-MM-DD')}/${dayjs().format('HH:mm:ss')}-46-${type}`
    let result = await qiniuUpload(name, filePath)
    res.send(result)
})



app.use("/api/user", userRouter)


app.all("*", function (req, res) {
    console.log(req.body, req.params, req.query, req.cookies);
    res.send("4045")
})
app.listen(config.port, function () {
    console.log(`http://localhost:${config.port}`);
})