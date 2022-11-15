// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"Enter your Email address",
        name:"Email",
    },
    {
        type:"input",
        message:"Enter yur GutHub username",
        name:"username",
    },
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
        message:"Enter instructions to install your program",
        name:"installation",
    },
    {
        type:"input",
        message:"How is your program used",
        name:"usage",
    },
    {
        type:"list",
        message:"Enter the licencing",
        choices:["None","Apache License 2.0", "GNU General Public License v3.0", 'MIT License', 'BSD 2-Clause "Simplified" Licensev', 'BSD 3-Clause "New" or "Revised" License', "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
        name:"licenc",
    },
    {
        type:"input",
        message:"Enter Contributing criteria",
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
    {
        type:"input",
        message:"How can one reach you for additional questions",
        name:"addQuestions",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    `# ${"Title"}

    ## Description

    ### Table of Contents

    ### Installing

    ### Usage

    ### License

    ### Contributig

    ### Tests

    ### Questions` 

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) =>
            console.log("Jett")
    );
}

init()

