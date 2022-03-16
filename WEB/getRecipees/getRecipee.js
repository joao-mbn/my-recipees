import { httpGet } from '../httpService.js';

var recipeesDropdown = document.getElementById('cataloged-recipees-dropdown');
var ingredientsList = document.getElementById('ingredients-list');
var prepareMethod = document.getElementById('prepare-method');
var recipees;

recipeesDropdown.addEventListener('change', event => displayRecipee(event));

getRecipees();

function getRecipees() {
    recipees = httpGet('recipees/getRecipees');
    recipees.forEach(recipee => {
        var recipeeOption = document.createElement('OPTION');
        recipeeOption.value = recipee.recipeeId;
        recipeeOption.innerHTML = recipee.recipeeName;
        recipeesDropdown.appendChild(recipeeOption);
    });
}

function displayRecipee(event) {
    var recipeesOptions = [...event.target.children]; // converting HTMLCollection to array
    var chosenRecipee = recipeesOptions.find(option => option.selected);
    var recipeeInfo = recipees.find(recipee => recipee.recipeeId === chosenRecipee.value);

    clearList(ingredientsList);
    clearList(prepareMethod);
    listfy(recipeeInfo.ingredients, ingredientsList);
    listfy(recipeeInfo.prepareMethod, prepareMethod);
}

function clearList(list) { list.replaceChildren(); }

function listfy(string, list) {
    string?.split(';').filter(ingredient => ingredient !== '')?.forEach(ingredient => {
        var item = document.createElement('LI');
        item.innerHTML = ingredient;
        list.appendChild(item);
    });
}


