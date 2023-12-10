// Importing the express module
const { response } = require('express')
const express = require('express')

// invoking express() function
const app = express()

// it parse incoming requests with urlencoded payloads
app.use(express.urlencoded())

// this function routes the HTTP get request to the path 
// when browers loads this function will be called
// '/' is the route path 
app.get('/', (request, response, next) => {
    response.send(`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <div class="container">
        <h1 class="text-center mt-3 mb-3">Submit Form Data in Node.js</h1>
        <div class="card">
            <div class="card-header">Sample Form</div>
            <div class="card-body">
                <form method="POST" action="/">
                    <div class="mb-3">
                        <label>First Name</label>
                        <input type="text" name="first_name" id="first_name" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label>Last Name</label>
                        <input type="text" name="last_name" id="last_name" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label>Email Address</label>
                        <input type="text" name="email_address" id="email_address" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <input type="submit" name="submit_button" class="btn btn-primary" value="Add" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    `)
}

)

app.post('/',(request, response, next) =>{
    response.send(request.body)//gets outputs into key value pairs 

})//This functiont routes HTTP post request to the specified path using callback func

app.listen(3033);//creating to port number to see the ouput in the browser