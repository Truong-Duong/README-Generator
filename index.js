//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//Create an array of questions for user input using inquirier
function questions() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your repository? ",
    },
    {
      type: "input",
      name: "description",
      message: "What is the project description? ",
    },
    {
      type: "input",
      name: "install",
      message: "What installation do you need to make the project run? ",
    },
    {
      type: "input",
      name: "username",
      message: "what is your GitHub user name? ",
    },
    {
      type: "input",
      name: "social",
      message: "what is your professional social media website? ",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the instruction for this project? ",
    },
    {
      type: "list",
      name: "license",
      message: "What is the license for this project? ",
      choices: ["Apache", "Eclipse", "GNU", "IBM", "MIT", "Mozilla"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Who is the guys behind the project? ",
    },
    {
      type: "input",
      name: "tests",
      message: "What is the test for this project? ",
    },
    {
      type: "input",
      name: "questions",
      message: "How can you get in touch? ",
    },
  ]);
}

//function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("./demoREADME.md")
  );
}

//function to initialize app
async function init() {
  const userInput = await questions();
  const fileName = "demoREADME.md";
  const readMe = await generateMarkdown(userInput);
  writeToFile(fileName, readMe);
}

// Function call to initialize app
init();
