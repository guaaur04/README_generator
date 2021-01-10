// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


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

    //Function to generate markdown for README
    .then((data) => {
        const filename = "newREADME.md";
        const generateMarkdown =`
        
        #Project Title
        ${data.title}
        
        ##Description
        ${data.description}
        
        ##Table of Contents
        
        * [Installation] (##Installation)
        * [Usage] (##Usage)
        * [License] (##License)
        * [Contributing] (##Contribution)
        * [Tests] (##Tests)
        * [Questions] (##Questions)
        
        
        ##Installation
        ${data.installation}
        
        ##Usage
        ${data.usage}
        
        ##License
        ${data.license}
        [![License: MIT](https://img.shields.io/badge/License-$(response.license}yellow.svg)](https://opensource.org/licenses/MIT)
        
        
        ##Contributing
        ${data.contribution}
        
        ##Tests
        ${data.test}
        
        ##Questions
        ${data.username}
        ${data.email}`


// A function to write README file
    fs.writeFile(filename, (generateMarkdown), (err) => {
            if (err) {
                console.log("Error. Try again.");
            }

            else {
                console.log("You've successfully created a README file.");
            }

        })
;})
