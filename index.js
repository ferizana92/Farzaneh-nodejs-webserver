const http =require('http');
const port = 3000;
const fs = require('fs')
const path = require('path');

const server =http.createServer((request, response)=>
{
    response.write('Hello ! I`m trying to Figure out how to Build a Basic Web Server with Node JS')
    response.end();
});

function requestResponseFunc(request,response){

    let fileName = request.url;

    let fileAddress = __dirname+"\\"+fileName.slice(1,);

    if (fileAddress === "./"){
        fileAddress = "./index.html";
    }
    let fileExtention = path.extname(fileAddress);
}

server.listen(port, function(error)
{
    if (error)
    {
        console.log('something went wrong', error)
    }
    else{
        console.log("server listening at http://localhost:3000");
    }

})
