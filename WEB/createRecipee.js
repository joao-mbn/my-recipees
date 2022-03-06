import { httpGet } from './httpService.js';

var ingredientsList = document.getElementById('ingredients-list');
var addIngredientsButton = document.getElementById('add-ingredients-button');

addIngredientsButton.addEventListener('click', event => { addIngredient() });

function addIngredient() {
    var li = document.createElement('LI')

    var input = document.createElement('INPUT')
    input.type = 'text';
    input.placeholder = '1 Teaspoon of Salt'

    var deleteButton = document.createElement('INPUT')
    deleteButton.type = 'button'
    deleteButton.value = 'Delete'

    li.appendChild(input)
    li.appendChild(deleteButton)
    ingredientsList.appendChild(li)
}

function getRecipees() {
    var recipees = JSON.parse(httpGet('recipees')).response.map(obj => obj.recipeeName);
    var recipeesDatalist = document.getElementById('recipees-datalist');

    for (let i = 0; i < recipees.length; i++) {
        var recipeeOption = document.createElement('OPTION');
        recipeeOption.value = recipees[i];
        recipeesDatalist.appendChild(recipeeOption);
    }
}

getRecipees();