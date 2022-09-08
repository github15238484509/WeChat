
import eventListener from "./eventListener.js"
export default () => {
    function init() {
        window.ws = new WebSocket(`ws://localhost:3000/wechat`);
        ws.onopen = function () {
            eventListener(ws)
        }
        ws.onmessage = function ({ data }) {
            let newData = JSON.parse(data)
            const event = new Event(newData.type);
            ws.dispatchEvent(event)
        }
        ws.onclose = function () {
            console.log("close");
            init()
        }
    }
    init()
}
