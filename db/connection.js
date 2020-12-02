let util = require("util");
let mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "employee_trackerDB"
})
connection.connect();
connection.query = util.promisify(connection.query);

module.exports = connection
