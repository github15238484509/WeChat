let loopFn = {

}

module.exports = function (ws) {
    for (const fn in loopFn) {
        fn(ws)
    }
}