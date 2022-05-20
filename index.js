const http = require('http');
const port = 5000;
const fs = require('fs')
const path = require('path');

const server = http.createServer((request, response) => {

    let extentionname ='./view'+request.url

    if (extentionname === "./view/") {
        extentionname= "./view/index.html"
        }

        fs.readFile(extentionname ,(error, value) => {
            if (error) {
                response.writeHead(404, { "content-type": "text/html" })
                response.end("2.something went wrong")
            }
            else {

                switch (path.extname(extentionname)) {
                    case ".html": response.writeHead(200, { "Content-Type": "text/html" });
                    
                        break;
                    case ".css": response.writeHead(200, { "Content-Type": "text/css" });
                        break;
                    case ".png": response.writeHead(200, { "Content-Type": "image/png" });
                        break;
                    case ".ico": response.writeHead(200, { "Content-Type": "image/x-icon" });
                        break;

                }
                   response.write(value);
                   response.end();

            }
        });

});

server.listen(port, (err) => {
    if (err) {
        console.log('error')
    }
    else {
        console.log('listening port 5000')
    }
})