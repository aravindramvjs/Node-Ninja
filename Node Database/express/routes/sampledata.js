let express = require('express');

let router = express.Router();//creates new router object used to handle that pattern of http 

router.get('/', (request, response, next) => {
    response.send('List all sample data')
})

router.get('/add', (request, response, next) => {
    response.send('Add sample data')
})