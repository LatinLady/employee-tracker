const inquirer = require('inquirer');

// Employee tracker logic
function employeeTracker() {
  // Your code for the employee tracker functionality goes here
 
// Add employees
tracker.add_employee(1, "John Doe", "Manager")
tracker.add_employee(2, "Jane Smith", "Developer")
tracker.add_employee(3, "Alice Johnson", "Designer")

inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter employee's name:",
      },

      {
        type: 'input',
        name: 'name',
        message: "Enter employee's name:",
      },
    ])
    .then((answers) => {
      // Display user input
      console.log(`Employee name: ${answers.name}`);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Start the employee tracker
employeeTracker();
