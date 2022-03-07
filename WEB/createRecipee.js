import { httpGet } from './httpService.js';

var recipeesDatalist = document.getElementById('recipees-datalist');
var ingredientsList = document.getElementById('ingredients-list');
var addIngredientsButton = document.getElementById('add-ingredients-button');
var newRecipeeForm = document.getElementById('new-recipee');
var recipeeNameText = document.getElementById('recipee-name');

addIngredientsButton.addEventListener('click', event => { addIngredient() });
newRecipeeForm.addEventListener('submit', event => { postRecipee() });

getRecipees();

function getRecipees() {
    var recipees = JSON.parse(httpGet('recipees')).response.map(obj => obj.recipeeName);

    for (let i = 0; i < recipees.length; i++) {
        var recipeeOption = document.createElement('OPTION');
        recipeeOption.value = recipees[i];
        recipeesDatalist.appendChild(recipeeOption);
    }
}

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

function postRecipee(scope) {

    event.preventDefault();
    var recipeeName = recipeeNameText.value;
    let ingredients = [];
    var children = ingredientsList.children;

    for (let i = 0; i < children.length; i++) {
        var grandChildren = children[i].children;

        for (let j = 0; j < grandChildren.length; j++) {
            var value = grandChildren[j].value;
            if (value !== 'Delete') {
                ingredients.push(value)
            }
        }
    }

    return ingredients

}
