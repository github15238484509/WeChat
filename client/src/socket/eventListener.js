import { debounce } from "@/utils/index.js"
//  这个页面是处理函数用的

let ping = debounce(function () {
    ws.send(JSON.stringify({
        type: 'ping',
    }))
}, 3000)
//好友发送的消息
function singleChat(e) {
    console.log(e.data);
}
//好友发送的消息
// function singleChat(e) {
//     console.log(e.data);
// }
export default function initEvent(ws) {
    ws.send(JSON.stringify({
        type: "authorization",
        data: {
            refresh_authorization: localStorage.getItem("refresh_authorization"),
            authorization: localStorage.getItem("authorization")
        }
    }))
    ws.addEventListener("authorization", ping)
    ws.addEventListener("ping", ping)
    ws.addEventListener("singleChat", singleChat)
}