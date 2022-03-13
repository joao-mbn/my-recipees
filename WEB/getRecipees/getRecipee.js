import { httpGet } from '../httpService.js';

var recipeesDatalist = document.getElementById('recipees-datalist');

function getRecipees() {
    var recipees = JSON.parse(httpGet('recipees')).response.map(obj => obj.recipeeName);

    for (let i = 0; i < recipees.length; i++) {
        var recipeeOption = document.createElement('OPTION');
        recipeeOption.value = recipees[i];
        recipeesDatalist.appendChild(recipeeOption);
    }
}

getRecipees();