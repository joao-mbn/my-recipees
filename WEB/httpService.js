var baseUrl = 'http://127.0.0.1:6000/';

export function httpGet(controller) {
    var url = baseUrl + controller;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}