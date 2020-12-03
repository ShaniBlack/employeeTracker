let {prompt} = require("inquirer");
const { addEmployee } = require("./db/store");
require("console.table");

const db = require("./db/store")

async function loadMainPrompts() {
    const {choice} = await prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'choice',
        choices: ['View all employees', 'View all departments', 'View all roles', 'Add new employee', 'Add new department', 'Add new role', 'Update employee roles']
    });
    switch (choice) {
        case 'View all employees':
            viewAllEmployees();
            break;
        case 'View all departments':
            viewAllDepartments();
            break;
        case 'View all roles':
            viewAllRoles();
            break;
        case 'Add new employee':
            addNewEmployee();
            break;
        case 'Add new department':
            addNewDepartment();
            break;
        case 'Add new role':
            addNewRole();
            break;
        case 'Update employee roles':
            updateEmployeeRole();
            break;
        default: 
        process.exit()
    }
}

// async function to be able to await
async function viewAllEmployees() { 
    // waits for findAllEmployees action to run before looking at next line of code
    let allEmployees = await db.findAllEmployees();
    if (err) throw err;
    console.table(allEmployees);

    loadMainPrompts();
}
async function viewAllDepartments() { 
    let allDepartments = await db.findAllDepartments();
    if (err) throw err;
    console.table(allDepartments);

    loadMainPrompts();

}
async function viewAllRoles() { 
    let allRoles = await db.findAllRoles();
    if (err) throw err;
    console.table(allRoles);

    loadMainPrompts();

}
async function addNewEmployee() { 
    // if (err) throw err;
    let {choice} = await prompt([
        {
            type: 'input',
            message: 'What is the employee first name?',
            name: 'firstName'
        },
        {
            type: 'input',
            message: 'What is the employee last name?',
            name: 'lastName'
        },
        {
            type: 'input',
            message: 'What is the employee role id?',
            name: 'roleID'
        },
        {
            type: 'input',
            message: 'What is the manager role id?',
            name: 'managerID'
        }], 
        await db.addEmployee()
        
        )   
    loadMainPrompts();

}


loadMainPrompts()

// functions