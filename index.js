//  Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// file that will be riten to
const file  = "./README.md"

// questions for user input
const questions = [
    {
        type:"input",
        message:"Enter your Email address:",
        name:"email",
    },
    {
        type:"input",
        message:"Enter yur GutHub username:",
        name:"username",
    },
    {
        type:"input",
        message:"Enter your project title:",
        name: "title",
    },
    {
        type:"input",
        message:"Enter your project description:",
        name:"description",
    }, 
    {
        type:"input",
        message:"Enter instructions to install your program:",
        name:"installation",
    },
    {
        type:"input",
        message:"Enter how to use your project:",
        name:"usage",
    },
    {
        type:"list",
        message:"Choose a licencing that best fits your project",
        choices:["None","Apache License 2.0", "GNU General Public License v3.0", 'MIT License', 'BSD 2-Clause "Simplified" Licensev', 'BSD 3-Clause "New" or "Revised" License', "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 1.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v3.0", "Mozilla Public License 2.0", "The Unlicense"],
        name:"license",
    },
    {
        type:"input",
        message:"Enter Contributing criteria:",
        name:"contributing",
    }, 
    {
        type:"input",
        message:"Enter Tests:",
        name:"test",
    }, 
];

// Uses the content to write the file   
function writeToFile(fileName, data) {   
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("File GEnerated")
    );
}

// initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile(file, generateMarkdown(data))
        });
}

init()
