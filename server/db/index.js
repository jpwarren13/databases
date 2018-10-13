const mysql = require('mysql');

dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});
dbConnection.connect();
console.log('MySQL Connected!');

exports.dbConnection = dbConnection;