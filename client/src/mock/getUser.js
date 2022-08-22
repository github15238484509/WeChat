import Mock from "mockjs";

Mock.mock("/api/user/whoami","post",(parasm)=>{
    return {
        message:'请求成功',
        code:0,
        data:{
            name:Mock.mock("@name"),
            id:"123456",
            token:parasm.body
        }
    }
})