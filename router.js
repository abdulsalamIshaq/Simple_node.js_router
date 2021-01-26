const http = require('http');

class router {
    
    constructor(port){
        this.port = port;
    }

    get(url, callback) {
        http.createServer((req, res) => {
            if (req.method !== 'GET') return console.log(`${req.method} is not supported for this route`);
            if (req.url == url) {
                callback(req, res);
                res.end();
            }
        }).listen(this.port);
    }
}

module.exports = router;