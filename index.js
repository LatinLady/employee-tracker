const inquirer = require('inquirer');
const Employee = require('./Employee');

// Function to add a new employee
async function addEmployee() {
  console.log('=== Add New Employee ===');
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the employee name:',
    },
    {
      type: 'input',
      name: 'department',
      message: 'Enter the employee department:',
    },
    {
      type: 'input',
      name: 'position',
      message: 'Enter the employee position:',
    },
  ]);

  const { name, department, position } = answers;
  const newEmployee = new Employee(name, department, position);
  console.log('New employee added:', newEmployee);
  // Add the new employee to your database or storage
}

// Function to search for an employee
async function searchEmployee() {
  console.log('=== Search Employee ===');
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the employee name to search:',
    },
  ]);

  const { name } = answer;
  // Search for the employee in your database or storage
  // Display the employee details if found
  // Otherwise, show a message that the employee was not found
}

// Function to display a menu and handle user input
async function mainMenu() {
  console.log('=== Employee Tracker ===');
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Choose an action:',
      choices: ['Add Employee', 'Search Employee', 'Exit'],
    },
  ]);

  switch (answer.action) {
    case 'Add Employee':
      await addEmployee();
      break;
    case 'Search Employee':
      await searchEmployee();
      break;
    case 'Exit':
      console.log('Exiting...');
      return;
  }

  console.log('\n');
  await mainMenu();
}

// Start the employee tracker
mainMenu();


