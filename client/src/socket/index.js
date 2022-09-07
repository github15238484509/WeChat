
import eventListener from "./eventListener.js"
export default () => {
    window.ws = new WebSocket(`ws://localhost:3000/wechat`);
    ws.onopen = function () {
        // ws.send(JSON.stringify({
        //     type: "authorization",
        //     data: {
        //         refresh_authorization: localStorage.getItem("refresh_authorization"),
        //         authorization: localStorage.getItem("authorization")
        //     }
        // }))
        ws.send(JSON.stringify({
            type: "ok",
            data: {
               
            }
        }))
    }
    ws.onmessage = function ({ data }) {
        // {
        //     type:"",
        //     data:''
        // }
        console.log(data);
        let newData = JSON.parse(data)
        const event = new Event(newData.type);
        console.log(event);
        ws.dispatchEvent(event)
    }
    ws.onclose = function () {
        console.log("关闭了");
    }
    eventListener(ws)
}
