const createHTML = (employeeArray) => {
let cardArray = []

const createManager = (employee) => {
    return `<div class= "container text-center">
    <div class="card row align-items-center" style="width: 18rem;">
    <div class="card-body col" id="card-main-body">
    <h4 class="card-title"> ${employee.getRole()}</h5>
    <p class="card-text">Name: ${employee.getName()}</p>
    <p class="card-text">Employee ID: ${employee.getId()}</p>
    <p class="card-text">Office Number: ${employee.getOfficeNumber()}</p>
    <a href="mailto:${employee.getEmail()}" class="card-link">Email: ${employee.getEmail()}</a>
  </div>
  </div>
</div>
    `;
}
// create intern and create engineer functions as above
const createEngineer = (employee) => {
  return `<div class= "container text-center">
    <div class="card row align-items-center" style="width: 18rem;">
    <div class="card-body col" id="card-main-body">
    <h4 class="card-title"> ${employee.getRole()}</h5>
    <p class="card-text">Name: ${employee.getName()}</p>
    <p class="card-text">Employee ID: ${employee.getId()}</p>
    <a href="https://github.com/${employee.getGitHub()}">GitHub: ${employee.getGitHub()}</a>
    <a href="mailto:${employee.getEmail()}" class="card-link">Email: ${employee.getEmail()}</a>
  </div>
  </div>
</div>`;
};

const createIntern = (employee) => {
  return `<div class= "container text-center">
    <div class="card row align-items-center" style="width: 18rem;">
    <div class="card-body col" id="card-main-body">
    <h4 class="card-title"> ${employee.getRole()}</h5>
    <p class="card-text">Name: ${employee.getName()}</p>
    <p class="card-text">Employee ID: ${employee.getId()}</p>
    <p class="card-text">School: ${employee.getSchool()}</p>
    <a href="mailto:${employee.getEmail()}"class="card-link">Email: ${employee.getEmail()}</a>
  </div>
  </div>
</div>`;
};

employeeArray.forEach(employee => {
    if (employee.getRole() === "Manager") {
        cardArray.push(createManager(employee))
    }
    else if (employee.getRole() === "Engineer") {
        cardArray.push(createEngineer(employee))
    }
    else if (employee.getRole() === "Intern") {
        cardArray.push(createIntern(employee))
    }
});

return cardArray.join('');
}



module.exports = employeeArray => {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fetch Response Status</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css"/>
  </head>
  <header class= "text-center display-1 text-bg-success p-3"> My Team </header>
  <body>
  <div class= "flex">
    ${createHTML(employeeArray)} 
  </div>  
  </body>
</html>
`;
}