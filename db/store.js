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
    addEmployee(choice) {
        return this.connection.query("INSERT INTO employees SET ?", {
            first_name: choice.firstName,
            last_name: choice.lastName,
            role_id: choice.roleID, 
            manager_id: choice.managerID,
        });
    }

}

module.exports = new Store(connection)

// methods