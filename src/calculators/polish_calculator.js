const validate = require("./utility/validate.js");
const calculate = require("./utility/calculate.js");

/*
    Calculator class
    methods: 
        -calculate (array_to_be_processed)
            - takes a reverse polish notation equation and returns the solution
        -is_valid (array_to_be_processed)
            -takes a reverse polish notation equation and returns true if valid, throws error if invalid

*/
const polish_calcuator = {
	calculate: function (array_to_be_processed) {
		return calculate(array_to_be_processed);
	},
	is_valid: function (array_to_be_processed) {
		return validate(array_to_be_processed);
	},
};
module.exports = polish_calcuator;
