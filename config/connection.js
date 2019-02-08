var mysql = require("mysql");

// if (process.env.jawsUrl) {
//   connection = mysql.createConnection(process.env.jawsUrl);
// } else {
connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "sign_db"
  });
// }

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
