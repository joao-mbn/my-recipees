var configs = require('../.vscode/configs');
var mySql = require(configs.GLOBAL_PATH + 'mysql2');

var connection = mySql.createConnection({
    host: configs.HOST,
    user: configs.USER,
    password: configs.PASSWORD,
    database: configs.DATABASE
})

connection.connect(error => {
    if (error) throw error;
    console.log('Successfully connected to database!');
    connection.query(sql, (error, result) => {
        if (error) throw error;
        return result;
    })
})