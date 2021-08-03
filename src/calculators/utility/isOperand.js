/*
    isOperand
        Parameters:
            String symbol
    utility class that returns true or false if it is a symbol that is an operand
            
*/
function isOperand(symbol) {
	if (symbol == "+" || symbol == "-" || symbol == "/" || symbol == "*") {
		return true;
	}
	return false;
}

module.exports = isOperand;
