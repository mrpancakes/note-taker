# Note Takerg
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


## Description

The purpose of this application is for someone to easily create notes, with the ability to view and delete existing note entries.

I used the following npm packages to built this application:
* Express
* uuid

## Details

When the application is run, the prompt starts by asking for the Manager's info:
* Name
* Email Address
* ID
* Office Number

Next, you are prompted to choose a new employee type (Engineer or Intern) or end the process:

Engineer questions:
* Name
* Email Address
* ID
* GitHub Username

Intern questions:
* Name
* Email Address
* ID
* School


Once the user has completed all questions and elects to finish, an index.html file will be generated in the /dist folder.

## How To Use

Below is an overview of how to use this application:

* Install inquirer, fs, and jest through the terminal by running: npm i
* Open terminal on your desktop, cd into the directory, and run: node index.js
* Answers the questions that are prompted in your terminal, and see that an index.html file will be generated in the /dist folder.

## More Info

You can watch a video demonstration of me running the app [here](https://www.youtube.com/watch?v=AFj_vAdGWks). A sample generated html can be found in the /dist folder in the repo.

![Terminal Preview](./images/terminal-screenshot.png)
![Application Preview](./images/rendered-html.png)



