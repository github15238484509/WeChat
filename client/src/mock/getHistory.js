import Mock from "mockjs";
Mock.setup({
    timeout: "200-1000"
})
Mock.mock("/api/historyList", "get", (parasm) => {
    let data = Mock.mock({
        message: '请求成功',
        code: 0,
        "data|30": [
            {
                "name": "@ctitle",
                "id|+1": 1,
                "time": "10:20",
                "message": "'@sentence(3, 5)",
                "src": Mock.Random.dataImage(),
                "active": false
            }
        ]
    })
    return data
})

