//Manager module
const Manager = require("./lib/Manager");
//Engineer module
const Engineer = require("./lib/Engineer");
//Intern module
const Intern = require("./lib/Intern");
//inquirer module to prompt the user
const inquirer = require("inquirer");
//path module to create directory
const path = require("path");
//fs module to interact with I/O file system
const fs = require("fs");
//creating output folder in dirctory
const OUTPUT_DIR = path.resolve(__dirname, "output");
console.log(OUTPUT_DIR);
//creating team.html file in output folder
const outputPath = path.join(OUTPUT_DIR, "team.html");
console.log(outputPath);
//htmlRender module
const render = require("./lib/htmlRenderer");
//array of employees
var employees = [];
//function addManager to prompt the user with Manager questions
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
                    //create instance of Managaer
                    const manager = new Manager(name, id, email, officeNumber);
                    //push the instance to employees array
                    employees.push(manager);
               } catch (err) {
                    console.log(err);
               }
               //function addTeamMember
               addTeamMember();
          });
}

//function addTemaMember to give choice to user to add more team members
function addTeamMember() {
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

//function addIntern to prompt the user with Intern questions

function addIntern() {
     inquirer
          .prompt([
               {
                    type: "input",
                    name: "name",
                    message: "What is your Intern name?",
               },
               {
                    type: "input",
                    name: "id",
                    message: "Please enter id of the Intern",
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
                    //create instance of Intern
                    const intern = new Intern(name, id, email, school);
                    //push the instance to employees array
                    employees.push(intern);
               } catch (err) {
                    console.log(err);
               }
               //function addTeamMember
               addTeamMember();
          });
}

//function addEngineer to prompt the user with Engineer questions
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
                    //create instance of Engineer
                    const engineer = new Engineer(
                         name,
                         id,
                         email,
                         githubUsername
                    );
                    //push the instance to employees array
                    employees.push(engineer);
               } catch (err) {
                    console.log(err);
               }
               //calling addTeamMember function
               addTeamMember();
          });
}

//function teamCompleted to call render function to generator team.html file
function teamCompleted() {
     var output = render(employees);
     console.log(output);
     try {
          if (!fs.existsSync(OUTPUT_DIR)) {
               fs.mkdirSync(OUTPUT_DIR);
               fs.writeFileSync(outputPath, output);
          } else {
               fs.writeFileSync(outputPath, output);
               console.log(outputPath);
          }
     } catch (e) {
          console.log("An error occured");
     }
}
//calling addManager function
addManager();
