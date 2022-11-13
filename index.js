// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"Enter a title",
        name: "title",
    },
    {
        type:"input",
        message:"Describe your project",
        name:"description",
    },
    {
        type:"input",
        message:"ENter the content of the table of Contents",
        name:"tableOfContents",
    },
    {
        type:"input",
        message:"Enter instructions to install your program",
        name:"installation",
    },
    {
        type:"input",
        message:"How is your program used",
        name:"usage",
    },
    {
        type:"Input",
        message:"Enter the licencing",
        name:"licenc",
    },
    {
        type:"input",
        message:"Enter the contributes of the project",
        name:"contribution",
    }, 
    {
        type:"input",
        message:"Enter Tests",
        name:"test",
    }, 
    {
        type:"input",
        message:"Enter questions",
        name:"questions",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([questions])
        .then((response) =>
            response.confirm === responce.title
                ? console.log(questions)
                : console.log("sade")
    );
}

// Function call to initialize app
init();
// with the title of my project 
// and sections entitled Description, 
// Table of Contents, 
// 00Installation, 
// Usage, 
// License, 
// Contributing, 
// Tests, 
// and Questions

