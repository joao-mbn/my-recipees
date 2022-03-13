var baseUrl = 'http://127.0.0.1:5005/';

export function httpGet(path) {
    var url = baseUrl + path;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText).response;
}

export function httpPost(path, data) {
    var url = baseUrl + path;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", url, true);
    xmlHttp.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
    xmlHttp.send(JSON.stringify({ data: data }));
    return xmlHttp.responseText;
}