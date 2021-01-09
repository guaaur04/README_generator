// // A function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string

// function renderLicenseBadge(license) {}

// // A function that returns the license section of README
// // If there is no license, return an empty string

// function renderLicenseSection(license) {}

//Function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}

#Project Title
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
${response.email}`;
}

module.exports = generateMarkdown;
