const createHTML = (employeeArray) => {
let cardArray = []

const createManager = (employee) => {
    return `<h3> Employee ID : ${employee.getId()} </h3>
    <h3> Office Number : ${employee.getOfficeNumber()} </h3>
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title"> ${employee.getRole()}</h5>
    <p class="card-text">Name: ${employee.getName()}</p>
    <p class="card-text">Name: ${employee.getId()}</p>
    <p class="card-text">Name: ${employee.getOfficeNumber()}</p>
    <a href="#" class="btn btn-primary">Email: ${employee.getEmail()}</a>
  </div>
</div>
    `;
}
// create intern and create engineer functions as above
const createEngineer = (employee) => {
  return `<h2>${employee.getRole()}</h2>
    <h3> Name: ${employee.getName()} </h3>
    <h3> Email: ${employee.getEmail()} </h3>
    <h3> Employee ID : ${employee.getId()} </h3>
    <h3> Office Number : ${employee.getGitHub()} </h3>
    `;
};
const createIntern = (employee) => {
  return `<h2>${employee.getRole()}</h2>
    <h3> Name: ${employee.getName()} </h3>
    <h3> Email: ${employee.getEmail()} </h3>
    <h3> Employee ID : ${employee.getId()} </h3>
    <h3> Office Number : ${employee.getSchool()} </h3>
    `;
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
    <link rel="stylesheet" href="./assets/css/style.css" />
  </head>
  <body>
    ${createHTML(employeeArray)} 
  </body>
</html>
`;
}