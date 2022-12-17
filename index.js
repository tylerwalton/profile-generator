const Engineer = require ('./lib/Engineer')
const Manager = require ('./lib/Manager')
const Employee = require ('./lib/Employee')
const Intern = require ('./lib/Intern') 
const inquirer = require ('inquirer')
const fs = require ('fs')
const employeeArray = []

function managerPrompt () {
    inquirer.prompt ([
        {
            type : 'input',
             name : 'name',
             message : 'Please enter the managers name'
        },
        {
            type : 'input',
             name : 'officeNumber',
             message : 'Please enter the managers office number'
        },
        {
            type : 'input',
             name : 'email',
             message : 'Please enter the managers email'
        },
        {
            type : 'input',
             name : 'id',
             message : 'Please enter the managers ID'
        }
    ])

.then (response => {
const instance = new Manager (response.name, response.id, response.email, response.officeNumber)
employeeArray.push(instance)
console.log(employeeArray)
// add function here to ask if you want a new team member
memberPrompt()

})
}


function engineerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the engineers name",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the engineers github",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the engineers email",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the engineers ID",
      },
    ])

    .then((response) => {
      const instance = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      employeeArray.push(instance);
      console.log(employeeArray);
      // add function here to ask if you want a new team member
      memberPrompt ()
    });
}


function internPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the interns name",
      },
      {
        type: "input",
        name: "school",
        message: "What school did the intern attend?",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the interns email",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the interns ID",
      },
    ])

    .then((response) => {
      const instance = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      employeeArray.push(instance);
      console.log(employeeArray);
      // add function here to ask if you want a new team member
      memberPrompt () 
    });
}

function memberPrompt () {
    inquirer.prompt ([{
    type : 'list',
    name : 'newMember', 
    message : 'Would you like to add a new employee?',
    choices : ['Manager', 'Engineer', 'Intern', 'None']
    }
    ]) .then(response => {
        if (response.newMember === 'Manager') {
            managerPrompt ()
        }
        else if (response.newMember === 'Engineer') {
            engineerPrompt ()
        }
        else if (response.newMember === 'Intern') {
            internPrompt ()
        }
        else {console.log('Team Created!')}

    })

}

managerPrompt()
// const tyler = new Engineer ('tyler', '910', 'tylerwalton300@gmail.com','tylerwalton')
// console.log(tyler)

