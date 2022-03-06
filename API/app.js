var http = require('http');
var URL = require('url');
var { recipeesController } = require('./recipeesController')
var { PORT } = require('../.vscode/configs')

http.createServer(async (req, res) => {

    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    var path = URL.parse(req.url, true).pathname.split('/').filter(path => path !== '');
    var controller = path[0]
    var endPoint = path[1]

    var response;
    switch (controller) {
        case 'recipees':
            response = await recipeesController(endPoint)
            break;

        default:
            response = []
            break;
    }

    res.write(JSON.stringify({ "response": response }));
    res.end();

}).listen(PORT, () => console.log(`it\'s running! Available on: http://localhost:${PORT}`));
