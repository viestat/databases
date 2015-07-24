var mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat'
});

connection.connect();

module.exports = connection;


// var db = require('node-mysql');
// var DB = db.DB;
// var BaseRow = db.Row;
// var BaseTable = db.Table;

// var box = new DB({
    // host     : 'WORKSTATION-01.local',
    // user     : 'root',
    // password : '',
    // database : 'chat'
// });

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


