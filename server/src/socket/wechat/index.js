let close = require("./close")
let message = require("./message")
const { WebSocketServer } = require("ws");
const wss = new WebSocketServer({ clientTracking: true, noServer: true });
wss.on('connection', function (ws, request) {
    ws.on('message', function (data) {
        message(ws, data, wss.clients)
    });
    ws.on('close', function () {
        close(ws, wss.clients)
    });
});

module.exports.wechatInit = function (request, socket, head) {
    wss.handleUpgrade(request, socket, head, function (ws) {
        wss.emit('connection', ws, request);
    });
}
// wss.addListener("message",(e,ee)=>{
//     console.log(454599,e,ee);
// })
// wss.emit("message",498)
module.exports.wss = wss