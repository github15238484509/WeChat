import Mock from "mockjs";
Mock.setup({
    timeout: "200-1000"
})
Mock.mock("/api/friendList", "get", (parasm) => {
    let data = Mock.mock({
        message: '请求成功',
        code: 0,
        "data|30": [
            {
                "name": "@cname",
                "rname": '@cname',
                "id|+1": 1,
                "time": "10:20",
                "message": "'@sentence(3, 5)",
                "src": Mock.Random.dataImage(),
                "status|+1": false
            }
        ]
    })
    return data
})

