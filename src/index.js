#!/usr/bin/env node
const inquirer = require("inquirer");
const polish_calcuator = require("./calculators/polish_calculator");

/*
  index.js
  used to run and prompt the user for information in our app
*/
inquirer
	.prompt([
		{
			type: "editor",
			name: "equation",
			message:
				"Please put your equation in the editor, save and close it for your answer.",
		},
	])
	.then((answers) => {
		console.info("You typed in the following equation! :", answers.equation);
		console.info("Answer:", polish_calcuator.calculate(answers.equation));
	});
