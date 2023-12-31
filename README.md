# Thought Tank

## Description

This project is meant to build an API for a social network web application where users can share their thoughts, add reactions to their friends' thoughts and create a friend list. As a means to practice using a MongoDB database and Mongoose ODM.

The User Story and Acceptance Criteria for this project are as follows:

### User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Walkthrough Videos

The walkthrough videos provided below demonstrate the functionality of the API routes using Insomnia. The first video shows the GET routes for all users, GET route for a single user,POST route to create a new user, PUT route to update users by id, and DELETE route to delete users by id.
<https://drive.google.com/file/d/1IppMY0hRqRP2VEIBIIN9-jfC2VfezIr5/view?usp=sharing>

The second video shows the POST and DELETE routes for a user's Friends, GET routes for all thoughts, GET route for a single thought, POST route to create a new thought, PUT route to update thoughts by id, and DELETE route to delete thoughts by id.
<https://drive.google.com/file/d/15qlXtUy5ZdYnj4JWXzsc_JYL_ZJmuOWA/view?usp=sharing>

The last video shows the POST and DELETE routes for a thought's Reactions.
<https://drive.google.com/file/d/1gRdXjNKWl4Io3mbNh88faKq-cQJLs4Ha/view?usp=sharing>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

In order to install the project, the repository files must be copied or forked from the github repository at <github.com/Benhwaet/ThoughtTank> and install the project dependencies by entering ```npm install``` in the command line interface (terminal, gitbash, etc.).  After having done so, the data must be seeded to the users local machine by entereing ```npm run seed```. The user should also have Insomnia installed on their machine in order to test the GET, POST, PUT, DELETE, API functionalities, since this project will not be deployed to an external website.

## Usage

To be described once project is Insomnia capable...

## Contribute

Anyone is free to copy or fork this project to be modified and used as they see fit.  Recommendations by opening issues are welcome.

## Tests

No tests have been written but  the debugger is enabled in the package.json file to test for errors. The best test is to verify if the data is available and modifiable through Insomnia or MongoDB Compass.

## License

### MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code

<https://opensource.org/licenses/MIT>

## Questions

You can reach me through my GitHub or by email
if you have and questions or comments.

GitHub: <https://www.github.com/Benhwaet>

email: <benhwaet@gmail.com>
