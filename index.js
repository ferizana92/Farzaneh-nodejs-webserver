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
                switch(path.extname(filePath))
                {
                    case ".html": res.writeHead(200, {"Content-Type": "text/html"});
                    break;
                    case ".css": res.writeHead(200, {"Content-Type": "text/css"});
                    break;
                    case ".png": res.writeHead(200, {"Content-Type": "image/png"});
                    break;
                
            }

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




// const server =http.createServer((request, response)=>

// {
//     let filePath = path.join(
//         __dirname,
//         './view',
//         req.url==='./' ? "index.html" : request.url
//     );

//     let extensionname = path.extensionname(filePath)
//     let contentType ='text/html';

//     switch(extensionname){
//         case ".js" :
//             contentType="text/javascript";
//             break;
//         case ".css" :
//             contentType="text/css";
//             break;
//         case ".png" :
//             contentType="image/png";
//             break;
//     }

// if (contentType==="text/html" && extensionname==='' ){
//     filePath+= '.html' ;
// }

// fs.readFile(filePath,
//     (error , data) =>{
//         if (error)
//             {
//                 console.log('something went wrong', err)
//             }
//             else{
//                 res.writehead(200 , {'content-type' : contentType} );
//                 res.end('data'); 
//             }
//     }
//     )
// });

// server.listen(port, function(error)
// {
//     if (error)
//     {
//         console.log('something went wrong', err)
//     }
//     else{
//         // res.writehead(200 'content-type' 'text/html' )
//         // res.writehead(200 'content-type' 'text/css' )

//     }

// })
