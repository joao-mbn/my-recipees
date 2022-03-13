var configs = require('../.vscode/configs');
var mySql = require(configs.GLOBAL_PATH + 'mysql2/promise');

exports.executeQuery = async function (query, params) {
    return await (await connection()).execute(query, params)
}

async function connection() {
    return await mySql.createConnection({
        host: configs.HOST,
        user: configs.USER,
        password: configs.PASSWORD,
        database: configs.DATABASE
    })
}



