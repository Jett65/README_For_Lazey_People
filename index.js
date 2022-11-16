
//  Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

// file that will be riten to
const file  = "./README.md"

// questions for user input
const questions = [
    {
        type:"input",
        message:"Enter your Email address",
        name:"email",
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
        name:"license",
    },
    {
        type:"input",
        message:"Enter Contributing criteria",
        name:"contributing",
    }, 
    {
        type:"input",
        message:"Enter Tests",
        name:"test",
    }, 
];


// initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(({email, username, title, description, installation, usage, license, contributing, test, }) => {
            const renderREADME =`
# ${title}

## Description

${description}


## Table of Contents

## Instalation

${installation}

## Usage

${usage}


## License

${license}

## Contributing

${contributing}

### Test
                
${test}

### Questions

${username}

${email}`

            fs.writeFile(file, renderREADME, (err) =>
                err ? console.error(err) : console.log("File Generated")
            );

        });
}

init()
