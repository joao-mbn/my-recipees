
var http = require('http');
var URL = require('url');
const port = 5005;

http.createServer((req, res) => {
    var endPoint = URL.parse(req.url, true).pathname.split('/')[1];
    var response;
    switch (endPoint) {
        case 'recipees':
            response = ['Cinnamon and Banana Sugarless Cake', 'Pumpkins with Cocoa and Peanut Butter']
            break;

        default:
            response = []
            break;
    }
    res.write(JSON.stringify({ "response": response }));
    res.end();

}).listen(port, () => console.log(`it\'s running! Available on: http://localhost:${port}`));
