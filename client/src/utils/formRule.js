
let Rulesfun = {
    required: function (vale) {
        return vale.trim() ? true : false
    },
    range(value, arg) {
        let [min, max] = arg.split("-").sort((a, b) => a - b)
        let lenght = new String(value).length
        if (lenght > max || lenght < min) {
            return false
        }
        return lenght > max || lenght < min ? false : true
    }
}

export default function fromRule(value, rules = []) {
    for (let index = 0; index < rules.length; index++) {
        let rule = rules[index]
        if (!rule.fn) {
            throw `请输入函数名字`
        }
        let fnName = rule.fn.split(":")[0]
        let arg = rule.fn.split(":")[1]
        let fn = Rulesfun[fnName]
        if (typeof fn !== "function") {
            throw `没有此函数${fnName}`
        }
        let result = fn(value, arg)
        if (!result) {
            return rule.message
        }
    }
    return ""
} 