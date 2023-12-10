// Require the necessary modules
const express = require('express');
const mysql = require('mysql');
const ejs = require('ejs');

// Create a new Express app
const app = express();

// Configure the app
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'freshbase'
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});

// Define a route to fetch data from the MySQL database
app.get('/', (req, res) => {
  const sql = 'SELECT * FROM user_task';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL database: ', err);
      res.status(500).send('An error occurred while fetching data from the database.');
    } else {
      // Render the fetched data using the EJS template
      res.render('index', { data: results });
    }
  });
});

// Start the Express app
app.listen(3030)
