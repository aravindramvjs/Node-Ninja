const { createPool } = require('mysql')
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database:"freshbase"
})

let username = "balaji";
let useremail = "balaji@gmail.com";
let userpassword = "balaji123";


// let sql = "INSERT INTO users (username, useremail, userpassword) VALUES ('"+username+"', '"+useremail+"','"+userpassword+"')";//values (
let sql = "INSERT INTO users (username, useremail, userpassword) VALUES ("+username+","+useremail+","+userpassword+")";
pool.query(sql, function (err, result) {
    if (err) {
        throw err;

    }

    console.log(result.affectedRows + " record(s) updated");
  });
  
pool.query(`select * from users`, function(err, result) {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})

