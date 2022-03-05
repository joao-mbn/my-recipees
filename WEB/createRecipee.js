var ingredientsList = document.getElementById('ingredients-list');
var addIngredientsButton = document.getElementById('add-ingredients-button');

addIngredientsButton.onclick = function addIngredient() {
    var li = document.createElement('li')

    var input = document.createElement('input')
    input.type = 'text';
    input.placeholder = '1 Teaspoon of Salt'

    var deleteButton = document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.value = 'Delete'

    li.appendChild(input)
    li.appendChild(deleteButton)
    ingredientsList.appendChild(li)
}