let express = require('express');

let router = express.Router();//creates new router object used to handle that pattern of http 

let database = require('../database');

router.get("/", (request, response, next) => { //get,post
    let query = "select * from users ORDER BY userid ASC";

    database.query(query, (error, data) => { //req,res

    if(error){
        throw error;
    }
    else{
        response.render('sample_data',{ //views/sample_data
            title:'Node.js MySQL CRUD Application',
            action:'list',
            sampleData:data
        }
        )
    }
   });
});

router.get("/add",(request, response, next) => {
    response.render("sample_data",{
        title:'Insert Data Into Mysql',
        action:'add'
        }
        )
});

router.post("/add",(request, response, next) => {
    let name = request.body.name;
    let email = request.body.email;
    let password = request.body.password;

    let query = `insert into users (username, useremail,userpassword) VALUES ('${name}','${email}','${password}' )`;

    database.query(query, (error, data) => {

    if(error){
        throw error;
    }
    else{
        response.redirect("/sample_data")
    }

    }
    )
});


module.exports = router;