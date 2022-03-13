import { httpGet } from '../httpService.js';

var recipeesDatalist = document.getElementById('recipees-datalist');

function getRecipees() {
    var recipees = httpGet('recipees/getRecipees').map(obj => obj.recipeeName);

    for (let i = 0; i < recipees.length; i++) {
        var recipeeOption = document.createElement('OPTION');
        recipeeOption.value = recipees[i];
        recipeesDatalist.appendChild(recipeeOption);
    }
}

getRecipees();