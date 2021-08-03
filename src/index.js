#!/usr/bin/env node
const inquirer = require('inquirer');

//used to get input from the user
inquirer
  .prompt([
    {
      type: 'editor',
      name: 'story',
      message: 'Please put your equation in the editor, save and close it for your answer.',
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.story);
  });