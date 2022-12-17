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
})
}

managerPrompt ()
// const tyler = new Engineer ('tyler', '910', 'tylerwalton300@gmail.com','tylerwalton')
// console.log(tyler)

