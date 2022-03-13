var recipeesRepository = require('./recipeesRepository');
var recipeesService = require('./recipeesService');

exports.recipeesController = async function (endPoint, data) {

    switch (endPoint) {

        case 'postRecipee':
            return await recipeesService.postRecipee(data);

        case 'getRecipees':
            return await recipeesRepository.getRecipees();

        default:
            return [];
    }
}
