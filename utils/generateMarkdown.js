// Returns a license badge based on which license is passed in
function renderLicenseBadge(license) {

  let badge;
  switch(license){
    case 'MIT License':
      badge = '![MIT](https://img.shields.io/badge/license-MIT-informational)'
      break;
    case 'Apache License 2.0':
      badge = '![Apache](https://img.shields.io/badge/license-Apache-informational)'
      break;
    case 'GNU General Public License v3.0':
      badge = '![GNU](https://img.shields.io/badge/license-GNU-informational)'
      break;
    default:
      badge = '';
  }

  return badge;
}

// Returns the license link
function renderLicenseSection(license) {

  let link;
  
  switch(license){
    case 'MIT License':
      link = '[MIT License](https://mit-license.org/)'
      break;
    case 'Apache License 2.0':
      link = '[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt)'
      break;
    case 'GNU General Public License v3.0':
      link = '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.txt)'
      break;
    default:
      link = '';
  }

  if (link === ''){
    return 'The application has no license.';
  }else{
    return `This application is licenced by ${link}`;
  }
  
}

// Generate markdown for README
function generateMarkdown(data) {

  const badge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
  ${badge}
  ## Description
  ${data.description}
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [License](#license)
  6. [Questions](#questions)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.testing}
  ## License
  ${licenseSection}
  ## Questions
  This application was created by [${data.gitHubUser}](https://github.com/${data.gitHubUser}). <br>
  If you have any questions, they can be reached at ${data.email}.
  `;
}

module.exports = { generateMarkdown };
