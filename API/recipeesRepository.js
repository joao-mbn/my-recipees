var { executeQuery } = require('./dataBaseConnection')

module.exports = {
    getRecipees
}

async function getRecipees() {
    var query = 'select recipee_name as "recipeeName" from myRecipees';
    const [rows] = await executeQuery(query)
    return rows
}

getRecipees()