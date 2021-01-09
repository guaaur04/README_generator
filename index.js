// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
inquirer
    .prompt([
        // Enter my project title
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },

        // Enter a description
        {
            type: 'input',
            name: 'description',
            message: 'What is your project description?',
        },

        //Enter installation instructions
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions?',
        },

        //Enter usage information 
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this application?',
        },

        //Enter contribution guidelines
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines for this project?',
        },

        //Enter test instructions 
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions for this application?',
        },

        // Choose a license for my application from a list of options
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select a license option:',
            choices: ['MIT', 'GNU General Public License v3.0', 'Creative Commons'],
        },

        //Enter GitHub username
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
        },

        // WHEN I enter my email address
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },

    ])

    // A function to write README file
    .then((response) => {
        const markdownOutput =
            `#Project Title
        ${response.title}
        
        ##Description
        ${response.description}
        
        ##Table of Contents
        
        * [Installation] (#installation)
        * [Usage] (#usage)
        * [License] (#license)
        * [Contributing] (#contribution)
        * [Tests] (#tests)
        * [Questions] (#questions)
        
        
        ##Installation
        ${response.installation}

        ##Usage
        ${response.usage}
        
        ##License
        ${response.license}
        [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


        ##Contributing
        ${response.contribution}
        
        ##Tests
        ${response.test}

        ##Questions
        ${response.username}
        ${response.email}`
    })

function writeToFile(fileName, data) {
    fileName = 'readme.md'
    fs.writeFile(`${response.name}.md`, markdownOutput, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Your README has been created!")
        }
    })

    // Function to initialize application
    function init() {
        inquirer.prompt(inputs)

    }

    //This calls the application
    init();
