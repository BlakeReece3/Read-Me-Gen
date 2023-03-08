
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = ({ Title, Motivation, Description, Usage, Github, Email  }) =>
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

${Installation}

## Usage

${Usage}

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Contributing


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
      name: 'Description',
      message: 'Give a brief description of your project.',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What did you do to install your project?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Give examples and instructions for your project. What did you learn?',
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
