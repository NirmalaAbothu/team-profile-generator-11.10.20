# team-profile-generator-11.10.20

## About The Project

---

![alt text](Assets/Images/Image1.PNG)

![alt text](Assets/Images/Image2.PNG)

![alt text](Assets/Images/tests.PNG)

This application is about Team Profile Generator from Command Line Interface
This application allows user to add team members to team profile page.
First applicatin prompts to user the following questions:

-    Manager's name
-    Id
-    E-mail address
-    Office Number

Next application provides choice to user to add more team members to team,
user can add the following team members to team:

-    Engineer
-    Intern
-    Teamcompleted

If user select Engineer to add to team then
applicatin prompts to user the following questions:

-    Engineer's name
-    Id
-    E-mail address
-    Github username

If user select Intern to add to team then
applicatin prompts to user the following questions:

-    Intern's name
-    Id
-    E-mail address
-    School name

If user select TeamCompleted option from the list
then application exit and will create the team.html and style.css files
in output folder in directory.

## Implemented the following functionalities

-    addManager()
-    addEngineer()
-    addIntern()
-    teamCompleted()
-    writeCssFile()
-    validateInputField

## Built With

Node modules

-    Inquirer : to prompts the user with questions
-    fs : to interact with I/O file system
-    path : to create the directory
-    css : to style the team html page

Classes and inheritance : to crete the Emplyoee's objects(Manager,Engineer,and Intern)

-    Emplyoee Class with Employee constructor
-    Manager Class extends Emplyoee class
-    Engineer Class extends Emplyoee class
-    Intern Class extends Emplyoee class

## Getting Started

To get a local copy up and running follow below steps.

## Prerequisites

None

## Installation instructions:

Clone the repo git clone git@github.com:NirmalaAbothu/team-profile-generator-11.10.20.git then open Git Bash window ,navigate to project folder then run
following commands

-    run "npm install" or "npm i"
-    run "npm run test"
-    run "node app.js"

after run the above command and answer all questions, then navigate to project folder in Visual Studio Code,you should able to see "output"folder and "team.html" and "style.css" files in "output" folder.Open the "team.html" in browser and see the Team Profile page.

## Credits

Followed the documentation about classes,inheritance and node js

## License & copyright

Copyright © 2020 Nirmala Abothu

## Project Demo Links

[Demo1](https://drive.google.com/file/d/1hBcaEDT-_XuuYgYySyMhnbGhbmTX0i42/view?usp=sharing)

[Demo2](https://drive.google.com/file/d/1urgaK02xDcrU1MrDxpNfEKZtGRKvBaIo/view?usp=sharing)

[Demo3](https://drive.google.com/file/d/1oW2YMWOI8-x2HQnKcJnojnxs79tWBAMQ/view?usp=sharing)
