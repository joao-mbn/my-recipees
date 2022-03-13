var http = require('http');
var URL = require('url');
var { recipeesController } = require('./recipeesController')
var { PORT } = require('../.vscode/configs')

http.createServer(async (request, response) => {

    var path = URL.parse(request.url, true).pathname.split('/').filter(path => path !== '');
    var controller = path[0]
    var endPoint = path[1]

    let answer;

    if (request.method === 'GET') {
        answer = await sendToController(controller, endPoint);

    } else if (request.method === 'POST') {
        var chunks = [];
        request.setEncoding('utf-8');
        request.addListener('data', data => chunks.push(data));
        request.addListener('end', async () => {
            answer = await sendToController(controller, endPoint, JSON.parse(chunks).data);
        });
    }

    response.statusCode = 200;
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify({ "response": answer }));
    response.end();

}).listen(PORT, () => console.log(`it\'s running! Available on: http://localhost:${PORT}`));

async function sendToController(controller, endPoint, data) {

    switch (controller) {
        case 'recipees':
            return await recipeesController(endPoint, data)

        default:
            return []
    }
}
