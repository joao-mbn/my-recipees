import { httpPost } from "../httpService.js";

var ingredientsList = document.getElementById('ingredients-list');
var addIngredientsButton = document.getElementById('add-ingredients-button');
var newRecipeeForm = document.getElementById('new-recipee');
var recipeeName = document.getElementById('recipee-name');
var prepareMethods = document.getElementById('prepare-methods');

addIngredientsButton.addEventListener('click', event => { addIngredient() });
newRecipeeForm.addEventListener('submit', event => { postRecipee(event) });

addIngredient();

function addIngredient() {
    var li = document.createElement('LI')

    var input = document.createElement('INPUT')
    input.type = 'text';
    input.placeholder = '1 Teaspoon of Salt'

    var deleteButton = document.createElement('INPUT')
    deleteButton.type = 'button'
    deleteButton.value = 'Delete'
    deleteButton.addEventListener('click', event => { deleteIngredient(event) });

    li.appendChild(input)
    li.appendChild(deleteButton)
    ingredientsList.appendChild(li)
}

function deleteIngredient(event) {
    var deleteButton = event.target;
    deleteButton.parentElement.remove();
}

function postRecipee() {

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

    var data = {
        recipeeName: recipeeName.value,
        ingredients: ingredients,
        prepareMethods: prepareMethods.value
    }

    httpPost('recipees/postRecipee', data);

}
