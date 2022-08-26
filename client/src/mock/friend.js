import Mock from "mockjs";
Mock.setup({
    timeout: "200-1000"
})
Mock.mock(/\/api\/friend\/\d/, "get", (parasm) => {
    let data = Mock.mock({
        message: '请求成功',
        code: 0,
        "data": {
            "name": "@canme",
            "cname|1": [Mock.mock("@canme"), "", Mock.mock("@canme")],
            "id|+1": 1,
            "src": Mock.Random.dataImage(),
            "active": false,
        }
    })
    return data
})