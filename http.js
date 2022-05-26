const http = require('http');

const server = http.createServer((request, result) => {
    if (request.url === '/') {
        console.log('REQUESTURL1:', request.url);
        result.end('<h1>Welcome to our home page</h1>');
        return;
    }
    if (request.url === '/about') {
        console.log('REQUESTURL2:', request.url);
        result.end('ABOUT');
        return;
    }
  
        console.log('REQUESTURL3:', request.url);
        result.end(`
        <h1>Oops!<h1/>
        <h1>404<h1/>
        <div> <a href="/">Back to home page</a></div>`
        );
        return;
    
})

server.listen(5000);