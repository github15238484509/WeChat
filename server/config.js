let path = require("path")
module.exports = {

    port: 3000,
    qiniu: {
        accessKey: 'ktCSwmncAW50VzcCbXDtvf5wOjg2RccEQCiSqvY2', //七牛云Ak密匙
        secretKey: '6JSW3w4wUZFBenCshwOfsnE9XcqNFjyxFrM7SMtP', //七牛云Sk密匙
        bucket: 'wechat-nn', //存储空间的名字
        domain: 'rhgnlukku.hb-bkt.clouddn.com', //配置的域名
        postion:'Zone_z1'//存储的位置
    },
    temp:path.resolve(__dirname,"./src/temp"),//图片的临时存放处
}