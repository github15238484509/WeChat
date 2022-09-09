let router = require("express").Router()
let { addMessage } = require("../../services/message")
let { sendError, sendOk, sendOkError } = require("../../utils/sendCode")
let filterObject = require("../../utils/filterObj.js")
const multipart = require('connect-multiparty')
let config = require("../../../config")
let path = require("path")

let qiniuUpload = require("./upload")
let fs = require("fs")
var dayjs = require('dayjs')

let { wss } = require("../../socket/wechat/index")
router.post("/singleChat", multipart({ uploadDir: config.temp, filename: "content" }), async function (req, res) {
    if (req.files.content) {
        let file = req.files.content
        let filePath = file.path
        let type = path.extname(file.originalFilename);
        let name = `wechat/${dayjs().format('YYYY-MM-DD')}/${dayjs().format('HH:mm:ss')}--${req.id}--${type}`
        let result = await qiniuUpload(name, filePath)
        fs.unlinkSync(filePath)
        req.body.content = result
    }
    req.body.meId = req.id
    let result = await addMessage(req.body)
    if (result.status) {
        sendOk(res, null, '添加成功')
    } else {
        sendOkError(res, result.message)
    }
    let resultData = ["id", "meId", "friendId", "content", "type"]
    resultData = await filterObject(result.data, resultData)
    let list = wss.clients
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == req.id) {
            list[i].send(JSON.stringify(
                {
                    code: 0,
                    message: '',
                    data: resultData.data,
                    type: 'singleChat'
                }
            ))
        }
        if (list[i].id == req.resultData.friendId) {
            list[i].send(JSON.stringify(
                {
                    code: 0,
                    message: '',
                    data: resultData.data,
                    type: 'singleChat'
                }
            ))
            flage = false
        }
    }
})

module.exports = router