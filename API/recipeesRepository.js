var { executeQuery } = require('./dataBaseConnection')

module.exports = {
    getRecipees,
    postRecipee
}

async function postRecipee(data) {

    var query = "INSERT INTO myRecipees (recipee_name, ingredients, prepare_method) VALUES (?, ?, ?)";
    return await executeQuery(query, [data.recipeeName, data.ingredients, data.prepareMethods]);

}

async function getRecipees() {
    var query = 'select recipee_name as "recipeeName" from myRecipees';
    const [rows] = await executeQuery(query)
    return rows
}
