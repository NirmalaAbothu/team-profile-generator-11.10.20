const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
console.log(OUTPUT_DIR);
const outputPath = path.join(OUTPUT_DIR, "team.html");
console.log(outputPath);
// fs.mkdirSync(OUTPUT_DIR);

const render = require("./lib/htmlRenderer");

var employees = [];
function addManager() {
     inquirer
          .prompt([
               {
                    type: "input",
                    name: "name",
                    message: "What is your manager's name?",
               },
               {
                    type: "input",
                    name: "id",
                    message: "Please enter id of the emplyoee?",
               },
               {
                    type: "input",
                    name: "email",
                    message: "Please enter email",
               },
               {
                    type: "input",
                    name: "officeNumber",
                    message: "Please enter officenumber",
               },
          ])
          .then(function (response) {
               try {
                    console.log(response);
                    const name = response.name;
                    const id = response.id;
                    const email = response.email;
                    const officeNumber = response.officeNumber;
                    const manager = new Manager(name, id, email, officeNumber);
                    employees.push(manager);
               } catch (err) {
                    console.log(err);
               }

               addTemMember();
          });
     //  addTemMember();
}

//function
function addTemMember() {
     inquirer
          .prompt([
               {
                    type: "list",
                    name: "emplyoeeType",
                    message: "Do you want add more emplyoees to team",
                    choices: ["Engineer", "Intern", "teamCompleted"],
               },
          ])
          .then((response) => {
               const emplyoeeType = response.emplyoeeType;
               switch (emplyoeeType) {
                    case "Engineer":
                         addEngineer();
                         break;
                    case "Intern":
                         addIntern();
                         break;
                    case "teamCompleted":
                         teamCompleted();
                         break;

                    default:
                         break;
               }
          });
}

function addIntern() {
     inquirer
          .prompt([
               {
                    type: "input",
                    name: "name",
                    message: "What is your Engineer name?",
               },
               {
                    type: "input",
                    name: "id",
                    message: "Please enter id of the Engineer",
               },
               {
                    type: "input",
                    name: "email",
                    message: "Please enter email",
               },
               {
                    type: "input",
                    name: "school",
                    message: "What is your school name?",
               },
          ])
          .then((response) => {
               try {
                    console.log(response);
                    const name = response.name;
                    const id = response.id;
                    const email = response.email;
                    const school = response.school;
                    const intern = new Intern(name, id, email, school);
                    employees.push(intern);
               } catch (err) {
                    console.log(err);
               }
               addTemMember();
          });
}

//function addEngineer
function addEngineer() {
     inquirer
          .prompt([
               {
                    type: "input",
                    name: "name",
                    message: "What is your Engineer name?",
               },
               {
                    type: "input",
                    name: "id",
                    message: "Please enter id of the Engineer",
               },
               {
                    type: "input",
                    name: "email",
                    message: "Please enter email",
               },
               {
                    type: "input",
                    name: "githubUsername",
                    message: "Please enter githubUsername",
               },
          ])
          .then((response) => {
               try {
                    console.log(response);
                    const name = response.name;
                    const id = response.id;
                    const email = response.email;
                    const githubUsername = response.githubUsername;
                    const engineer = new Engineer(
                         name,
                         id,
                         email,
                         githubUsername
                    );
                    employees.push(engineer);
               } catch (err) {
                    console.log(err);
               }
               addTemMember();
          });
}

//function teamCompleted
function teamCompleted() {
     var output = render(employees);
     console.log(output);
     try {
          if (!fs.existsSync(OUTPUT_DIR)) {
               fs.mkdirSync(OUTPUT_DIR);
          } else {
               fs.writeFileSync(outputPath, output);
               console.log(outputPath);
          }
     } catch (e) {
          console.log("An error occured");
     }
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
addManager();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```