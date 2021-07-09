//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your repository? ",
        name: "title"
    },
    {
        type: "input",
        message: "What is your GitHub user name? ",
        name: "userName"
    },
    {
        type: "input",
        message: "What is your email? ",
        name: "email"
    },
    {
        type: "input",
        message: "Please describe the repository: ",
        name: "description"
    },
    {
        type: "input",
        message: "Chose license for project: ",
        name: "description",
        choice: ["Apache", "Eclipse", "GNU", "IBM", "MIT", "Mozilla"],
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("demoREADME.md"));
}

// Create a function to initialize app
function init() {
    const userInput = await questions();
    const fileName = "newREADME.md";
    const readMe = await generateMarkdown(userInput);
    writeToFile(fileName, readMe);
}

// Function call to initialize app
init();
