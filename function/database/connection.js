var mysql = require("mysql");

var connection = mysql.createConnection({
    host: process.env.MariaDB_HOST,
    port: process.env.MariaDB_PORT,
    user: process.env.MariaDB_USER,
    password: process.env.MariaDB_PASS,
    database: process.env.MariaDB_DATABASE,
});

exports.connection = connection;

