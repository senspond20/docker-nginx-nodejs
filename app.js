const http = require('http');

const Server = function(port, msg){
    this.port = port;
    this.message = msg;
    this.context =`server is listening on http://localhost:${port}`;
}

Server.prototype.on = function(){
    const msg = this.message;
    const server = http.createServer(function (req, res) {  
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.write(msg);
        res.end();
    })
    console.log(this.context);
    return server.listen(this.port);
}

new Server(5001, `hello nodejs server 1`).on();
new Server(5002, `hello nodejs server 2`).on();
new Server(5003, `hello nodejs server 3`).on();