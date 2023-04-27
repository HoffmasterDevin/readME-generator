// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

// User input array
const inputs = [
    "What is the title of this project?: ",
    "Please include a description: ",
    "Installation instructions: ",
    "Usage information: ",
    "Contribution guidelines: ",
    "Test instructions: ",
    "Which license will you be using?: ",
    "What is your GitHub username?: ",
    "What is your email address?: ",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
