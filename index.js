let {prompt} = require("inquirer");
require("console.table");

const db = require("./db/store")

async function loadMainPrompts() {
    const {choice} = await prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'choice',
        choices: ['View all employees', 'View all departments', 'View all roles', 'Add new employee', 'Add new department', 'Add new role', 'Update employee roles']
    })
    switch (choice) {
        case 'View all employees':
            viewAllEmployees();
            break;
        // case 
    
        default: 
        process.exit()
    }
}

// async function to be able to await
async function viewAllEmployees() { 
    // waits for findAllEmployees action to run before looking at next line of code
    let allEmployees = await db.findAllEmployees();
    console.table(allEmployees);

    loadMainPrompts();

}
loadMainPrompts()

// functions