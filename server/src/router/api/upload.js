const qiniu = require('qiniu');
let config = require("../../../config").qiniu
let fs = require("fs")
//构建上传策略函数 （获取七牛上传token）
function getToken() {
    const putPolicy = new qiniu.rs.PutPolicy({ scope: config.bucket });
    const accessKey = config.accessKey;
    const secretKey = config.secretKey;
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const uploadToken = putPolicy.uploadToken(mac);
    return uploadToken;
}
function getPath(path) {
    var mac = new qiniu.auth.digest.Mac(config.accessKey, config.secretKey);
    var config121 = new qiniu.conf.Config();
    var bucketManager = new qiniu.rs.BucketManager(mac, config121);
    var deadline = parseInt(Date.now() / 1000) + 300; // 1小时过期
    var privateDownloadUrl = bucketManager.privateDownloadUrl(config.domain, path, deadline);
    return privateDownloadUrl
}

/**
 * 
 * @param {上传到七牛云的名字} name 
 * @param {本地文件路径} path 
 * @returns 
 */
function qiniuUpload(name, path) {
    return new Promise((resolve) => {
        const config465 = new qiniu.conf.Config();
        config465.zone = qiniu.zone[config.postion];
        const formUploader = new qiniu.form_up.FormUploader(config465);
        const putExtra = new qiniu.form_up.PutExtra();
        formUploader.putFile(getToken(), name, path, putExtra, function (respErr, respBody, respInfo) {
            if (respInfo.statusCode == 200) {
                fs.unlinkSync(path)
                return resolve(getPath(respBody.key));
            } else {
                return resolve(respErr);
            }
        });
    })
}
module.exports = qiniuUpload



