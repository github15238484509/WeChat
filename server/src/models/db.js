const { Sequelize } = require('sequelize');
const db = new Sequelize('wechat', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
})
async function test() {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('e', error);
    }
}
test()

module.exports = db