
const iterator = {
    i: 1,
    next() {
        let result = this.i
        this.i++
        return result
    }
}
export default iterator.next
