// importing http module
const http = require('http');


// Creating a new http server instance
const server = http.createServer((req, res) => {
    res.end('Server Response');
});


//the server listening for incoming HTTP request on port 3000
server.listen(3000, () => {
    console.log('Server running on port 3000');
});