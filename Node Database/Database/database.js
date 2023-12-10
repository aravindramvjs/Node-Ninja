const mysql = require('mysql');

const connection = mysql.createConnection({
    //connecting mysql and nodejs
    // define mysql confrigation in json format 
        host: "localhost",
        user: "root",
        password: "password",
        database:"freshbase"
});

connection.connect((error) => {
    if(error){
        throw error;
    }
    else{
        console.log("Mysql database is connected successfully");
    }
}
)

module.exports = connection;// exports code fron this file another file 