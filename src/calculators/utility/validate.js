const isOperand = require("./isOperand.js");

/*
    Validate utility function
    Parameters: String array_to_be_processed
    function will throw an error if equation passed in is invalid, will return true if the class is valid
*/

function validate(array_to_be_processed) {
	split_array = array_to_be_processed.split(/[\s,]+/);

	//Checking for base valid case
	if (split_array.length == 1) {
		//Empty equation case
		if (split_array[0] == "") {
			throw new Error("Empty Equation");
		}

		//Only Operand Case
		if (isOperand(split_array[0])) {
			throw new Error("Invalid Amount of Numbers per Operators");
		}
		//Only a single number case
		else {
			return true;
		}
	}
	//Checking for if the operand and number is correct for input
	else {
		operand_count = 0;
		number_count = 0;

		for (const i of split_array) {
			if (isOperand(i)) {
				operand_count += 1;
			} else {
				number_count += 1;
			}
		}

		//Throwing error if the number and operand counts are incorrect
		if (number_count - 1 != operand_count) {
			throw new Error("Invalid Amount of Numbers per Operators");
		}

		//Returning true if number and operand counts are correct
		return true;
	}
}

module.exports = validate;
