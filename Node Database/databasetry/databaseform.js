const mysql = require('mysql')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const encoder = bodyParser.urlencoded()

const connection = mysql.createConnection({//connecting mysql and nodejs
    // define mysql confrigation in json format 
    host: "localhost",
    user: "root",
    password: "password",
    database:"freshbase"
})

connection.connect(error => {
    if(error){
        throw error;
    }
    else{
    console.log("MySQL Successfully Connected");
    }
})

app.get('/',(request, response) => {
    response.sendFile(__dirname + "/database.html")
})

app.post('/',encoder, (request, response) => {
    let username = request.body.name;
    let useremail = request.body.email;
    let userpassword = request.body.password;

    
let sql = "INSERT INTO users (username, useremail, userpassword) VALUES ('"+username+ "', '"+useremail+"','"+userpassword+"')";
connection.query(sql, function (err, result) {
    if (err) {
        throw err;
    }
    console.log(result.affectedRows + " record(s) updated");

    response.end();
  });
})
app.listen(1233)
