// load http module

// const var name = require('module_name')
// require() is a built-in function to include external modules that exist in separate files.
const http = require('http')

//create server
http.createServer((request, response) => {//createServer() method creates an HTTP Server object. 

    // writeHead method is for returning a status code to the browser,
    // and the browser will throw an error 
    // if it is a client-side status code or server-side status code.
    
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    })

    response.write("Hello I'm new to node js")// write message
 
    response.end()//end the response

}).listen(1233) // define port number to see the output & num can be anything