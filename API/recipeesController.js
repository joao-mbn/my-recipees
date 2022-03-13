var recipeesRepository = require('./recipeesRepository');

exports.recipeesController = async function (endPoint) {
    let response = []

    switch (endPoint) {
        case 'getFancyRecipees':
            response = ['Cinnamon and Banana Sugarless Cake', 'Pumpkins with Cocoa and Peanut Butter']
            break;

        case 'getRecipees':
        default:
            response = await recipeesRepository.getRecipees();
            break;
    }
    return response;
}
