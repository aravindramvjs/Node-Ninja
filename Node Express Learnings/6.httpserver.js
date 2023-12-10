const http = require('http');

const server = http.createServer((request, response)=>{
    if(request.url == '/'){
        response.end(`<h1>Welcome To The FreshTime Home Page<h1>`)
    }
    else if(request.url == '/about'){
        response.end(`<h1>Welcome To The FreshTime About Page<h1>`)
    }
    else{
        response.end(`<h1>OOPS This Page Not Found<h1>
        <h1>NOthing Here<h1>
        <a href="/">Back to home</a>`)
    }
})

server.listen(3030)