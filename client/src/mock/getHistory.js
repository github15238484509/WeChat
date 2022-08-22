import Mock from "mockjs";
Mock.setup({
    timeout: "200-1000"
})
Mock.mock("/api/historyList", "get", (parasm) => {
    let data = Mock.mock({
        message: '请求成功',
        code: 0,
        "data|100-300": [
            {
                "name": "@ctitle",
                "id": "@guid",
                "time": "@date",
                "message": "'@sentence(3, 5)",
                "src": Mock.Random.dataImage(),
                "active": false
            }
        ]
    })
    return data
})

