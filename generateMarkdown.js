

function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
}

function renderLicenseLink(license) {
    const licenseMap = {
      MIT: 'https://opensource.org/licenses/MIT'
     
      
    };
  
    return licenseMap[licenseName] || 'License link not found.';
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
