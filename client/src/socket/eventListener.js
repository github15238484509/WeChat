
function ok(){
    console.log(5566);
}

export default function initEvent(ws){
    ws.addEventListener("ok",ok)
}