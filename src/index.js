#!/usr/bin/env node
const inquirer = require("inquirer");
const polish_calcuator = require("./calculators/polish_calculator");
const polish_calculator = require("./calculators/polish_calculator");

//used to get input from the user
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
