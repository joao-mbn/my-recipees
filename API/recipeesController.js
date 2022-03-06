var recipeesRepository = require('./recipeesRepository');

exports.recipeesController = async function (endPoint) {
    let response = []

    switch (endPoint) {
        case 'fancyRecipees':
            response = ['Cinnamon and Banana Sugarless Cake', 'Pumpkins with Cocoa and Peanut Butter']
            break;

        default:
            response = await recipeesRepository.getRecipees();
            break;
    }
    return response;
}
