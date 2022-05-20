const http =require('http');
const port = 5000;
const fs = require('fs')
const path = require('path');

const server =http.createServer((request, response)=>
{
    let filePath = path.join(
        __dirname,
        './view',
        req.url==='./' ? "index.html" : request.url
    );

    let extensionname = path.extensionname(filePath)
    let contentType ='text/html';

    switch(extensionname){
        case ".js" :
            contentType="text/javascript";
            break;
        case ".css" :
            contentType="text/css";
            break;
        case ".png" :
            contentType="image/png";
            break;
    }

if (contentType==="text/html" && extensionname==='' ){
    filePath+= '.html' ;
}

fs.readFile(filePath,
    (error , data) =>{
        if (error)
            {
                console.log('something went wrong', err)
            }
            else{
                res.writehead(200 , {'content-type' : contentType} );
                res.end('data'); 
            }
    }
    )
});

server.listen(port, function(error)
{
    if (error)
    {
        console.log('something went wrong', err)
    }
    else{
        // res.writehead(200 'content-type' 'text/html' )
        // res.writehead(200 'content-type' 'text/css' )

    }

})
