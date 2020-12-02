let connection = require("./connection");

class Store{
    constructor(connection){
        this.connection = connection
    }
    findAllEmployees() {
        return this.connection.query("SELECT * FROM employee")
    }
}

module.exports = new Store(connection)

// methods