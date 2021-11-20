const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "laptop",
  password: "",
});
connection.connect();
module.exports = connection;
