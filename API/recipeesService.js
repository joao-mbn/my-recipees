var recipeesRepository = require('./recipeesRepository');

module.exports = {
    postRecipee
}

async function postRecipee(data) {

    data.ingredients = data.ingredients.filter(i => i !== '').join(';');
    if (data.recipeeName === '' || data.ingredients === '') return;

    return await recipeesRepository.postRecipee(data);

}