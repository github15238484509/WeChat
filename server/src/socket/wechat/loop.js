//这个页面是用户登陆后接回执行的函数所有函数
let loopFn = {
    aa(){
        // console.log(4656);
    }
}

module.exports = function (ws) {
    for (const fn in loopFn) {
        loopFn[fn](ws)
    }
}