const http =require('http');
const port = 5000;
const fs = require('fs')
const path = require('path');


const server=http.createServer((request, response) =>{
    let extentionname = "." + request.url
    if (extensionname=== "./" ){
        fs.readFile("index.html", (error,value)=>{
            if (error){
                response.writeHead( 404 , { "content-type" : "text/html"})

                response.end("something went wrong")
            }
            else{
                response.writeHead( 200 , { "content-type" : "text/html"})
                response.write(value)
                response.end ()

            }


        })

    }
    else
    {
        fs.readFile(extentionname, (error,value)=>{
            if (error){
                response.writeHead( 404 , { "content-type" : "text/html"})

                response.end("something went wrong")
            }
            else{
                
            }
response.write(value)
response.end(value)

        });

    }
});



server.listen(port, (err)=>{
    if (err){
        console.log('error')
    }
    else{
        console.log('listening port 5000')
    }
})