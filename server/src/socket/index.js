
const http = require('http');
let {wechatInit} = require("./wechat/index")
module.exports = function (app) {
    const server = http.createServer(app);
    server.on('upgrade', function (request, socket, head) {
        if (request.url === "/wechat") {
            wechatInit(request, socket, head)
        }
    });
    return server
}




