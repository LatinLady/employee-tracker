const inquirer = require('inquirer');

// Employee tracker logic
function employeeTracker() {
  // Your code for the employee tracker functionality goes here
  
  inquirer
    .prompt([
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
