let connection = require("./connection");

class Store{
    constructor(connection){
        this.connection = connection
    }
    findAllEmployees() {
        return this.connection.query("SELECT * FROM employee")
    }
    findAllDepartments() {
        return this.connection.query("SELECT * FROM departments")
    }
    findAllRoles() {
        return this.connection.query("SELECT * from role")
    }
    addEmployee(response) {
        return this.connection.query("INSERT INTO employees SET ?", {
            first_name: response.firstName,
            last_name: response.lastName,
            role_id: response.roleID, 
            manager_id: response.managerID,
        });
    }

}

module.exports = new Store(connection)

// methods