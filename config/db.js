const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodejs',
  password: '',
});

module.exports = connection.promise();
