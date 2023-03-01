
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = ({ Title, Motivation, Description, Learn, Github, Email  }) =>
`# ${Title}

## Description

${Description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an  folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:



## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Questions and Contributing


## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.`



inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your Read Me?',
    },
    {
      type: 'input',
      name: 'Motivation',
      message: 'What is the motivation for your project? What problem does it solve?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Give a brief description of your project.',
    },
    {
      type: 'input',
      name: 'Learn',
      message: 'What did you learn?',
    },
    {
      type: 'input',
      name: 'Github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'Email',
      message: 'What is your Email?',
    },
  ])
.then((answers) => {
    const Content = generateReadme(answers);
    console.log(answers)
    
    fs.writeFile('./ReadMe Content/ReadMe.md', Content, (err) =>
        err ? console.log(err) : console.log('Created README.md!')
        );    
});
