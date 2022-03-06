exports.recipeesControler = function (endPoint) {
    let response = []
    switch (endPoint) {

        case 'fancyRecipees':
            response = ['Cinnamon and Banana Sugarless Cake', 'Pumpkins with Cocoa and Peanut Butter']
            break;

        default:
            response = [
                'Roasted Soy Beans',
                'Curried Chicken Breasts',
                'Steamed Black Beans',
                'Steamed Chick Peas',
                'Baked Sweet Potatoes',
                'Baked Chicken Breasts',
                'Omelette'
            ]
            break;
    }
    return response;
}