// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadgeReturn;
  switch (license) {
    case "Apache":
      licenseBadgeReturn = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
      break;
    case "Eclipse":
      licenseBadgeReturn = `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)`;
      break;
    case "GNU":
      licenseBadgeReturn = `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;
      break;
    case "IBM":
      licenseBadgeReturn = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`;
      break;
    case "MIT":
      licenseBadgeReturn = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case "Mozilla":
      licenseBadgeReturn = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
      break;
    default:
      licenseBadgeReturn = "";
      break;
  }
  return licenseBadgeReturn;
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLinkReturn;
  switch (license) {
    case "Apache":
      licenseLinkReturn = `https://opensource.org/licenses/Apache-2.0`;
      break;
    case "Eclipse":
      licenseLinkReturn = `https://opensource.org/licenses/EPL-1.0`;
      break;
    case "GNU":
      licenseLinkReturn = `http://www.gnu.org/licenses/gpl-3.0`;
      break;
    case "IBM":
      licenseLinkReturn = `https://opensource.org/licenses/IPL-1.0`;
      break;
    case "MIT":
      licenseLinkReturn = `https://opensource.org/licenses/MIT`;
      break;
    case "Mozilla":
      licenseLinkReturn = `https://opensource.org/licenses/MPL-2.0`;
      break;
    default:
      licenseLinkReturn = "";
      break;
  }
  return licenseLinkReturn;
}

// If there is no license, return an empty string
function renderLicenseSection(licenseBadge, licenseLink) {
  return `
## License
  
${licenseBadge}
  
Link to the license: ${licenseLink}
`;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(licenseBadge, licenseLink);
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#Contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}

`;
}

module.exports = generateMarkdown;
