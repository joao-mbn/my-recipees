import { httpGet } from './httpService.js';

var ingredientsList = document.getElementById('ingredients-list');
var addIngredientsButton = document.getElementById('add-ingredients-button');

addIngredientsButton.addEventListener('click', (event) => { addIngredient() });

function addIngredient() {
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

function getRecipees() {
    var recipees = httpGet('recipees/');
    var recipeesDatalist = document.getElementById('recipees-datalist');

    for (let i = 0; i < recipees.length; i++) {
        recipeeOption = document.createElement('option');
        recipeeOption.value = recipees[i];
        recipeesDatalist.appendChild(recipeeOption);
    }
}

getRecipees();