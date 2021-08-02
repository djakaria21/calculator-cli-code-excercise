#!/usr/bin/env node
//has a start
//has a quit
//implements add, subtract, multiply, divide
const inquirer = require('inquirer');

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