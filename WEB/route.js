const routes = {
    "add": "./addRecipee/add.html",
    "get": "./getRecipees/get.html",
};

var mainPage = document.getElementById('main-page');

function goTo(page) {
    var route = routes[page] ?? routes['get']
    mainPage.innerHTML = `<object type="text/html" data="${route}" class="container" ></object>`
}