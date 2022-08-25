
// 防抖函数
export function debounce(fn, time = 1000) {
    let timer = null
    return function (...arg) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arg)
            timer = null
        }, time)
    }
}

// 节流函数
export function throttle(fn, time = 1000) {
    let timer = 0
    return function (...arg) {
        let newTimer = Date.now()
        if (newTimer - timer > time) {
            fn.apply(this, arg)
            timer = newTimer
        }
    }
}

export function myEncode(text) {
    return btoa(encodeURIComponent(text))
}
export function myDecode(text) {
    return decodeURIComponent(atob(text))
}

//获取一个元素的位置信息
export function getDomInfo(dom) {
    return dom.getBoundingClientRect()
}

// 判断一个元素的父级是不是他
export function isParentnode(childe, parent) {
    if (childe === null) {
        return false
    }
    let childeNode = childe.parentElement
    while (childeNode) {
        if (childeNode === parent) {
            return true
        } else {
            childeNode = childeNode.parentElement
        }
    }
    return false
}