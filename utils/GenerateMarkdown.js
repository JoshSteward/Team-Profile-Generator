function generateMarkdown(data){ 
    return `
# **${data.title}** #

${data.badge}

## Descritption ##

${data.description}

## Table of Contents 

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 

## Installation

${data.installation}

## Usage 

${data.usage}

## License 

${data.license}

## Contributers 

${data.contributers}

## Tests

${data.tests}

## Questions

${data.questions}

## Repository 

${data.repository}

## Github

${data.githublink}
    `;
}

module.exports = generateMarkdown;
