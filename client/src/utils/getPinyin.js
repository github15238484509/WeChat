import pinyin from "pinyin";
export default function getPinyin(data, prop) {
    let result = data.map((item) => {
        let text = item[prop].slice(0, 1)
        let letter = pinyin(text)[0][0] || ""
        return {
            letter: letter.toLocaleUpperCase(),
            data: item
        }
    })
    return result.sort((a, b) => {
        return a.letter > b.letter ? 1 : -1
    })
}
// let data = [{
//     name: "2"
// }, {
//     name: "1"
// }, {
//     name: '你好'
// }, {
//     name: "打打怪"
// }, {
//     name: "b"
// }, {
//     name: "ab"
// }]

// console.log(getPinyin(data, "name"));
