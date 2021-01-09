// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

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
            choices: ['MIT','GNU General Public License v3.0','Creative Commons'],
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
        const readmeOutput = 
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
    }




// Function to initialize application
function init() { }

// Function call to initialize application
init();
