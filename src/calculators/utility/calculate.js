const isOperand = require("./isOperand.js")
const validate = require("./validate.js")
// TODO condense operations into a service class
const add = require("../../operations/add")
const divide = require("../../operations/divide.js")
const multiply = require("../../operations/multiply.js")
const subtract = require("../../operations/subtract.js")


function calculate(array_to_be_processed){

    //splitting our big string into individual pieces

    //check if our equation is valid
    //This is technically going through our array one time already, so our complexity is going to be O(n)
    // We can technically have an implementation that gets around this by checking if the equation is valid while calculating our equation, but I feel like it would be less readable
    validate(array_to_be_processed);

    array_to_be_processed = array_to_be_processed.split(/[\s,]+/)
    
    // since arrays in javascript are defined by a hash table by default we don't have to implement stack
    //also, since the most complex operation we're going to be using is a pop, we don't have to worry about the n complexity other than going through our equation once
    numberStack = [];

    //go through all of the symbols and process them
    //since the operations we're going to be using are O(1) inside of the below code, the worst case we have is O(n) and since we've already done O(n), it'd be O(n) + O(n) which is O(2n) which just simplifies to O(n) in the long term 
    for(const i of array_to_be_processed)
    {
        
        //if we find a number we add it to the numberStack
        if (!isOperand(i))
        {
            numberStack.push(i)
        }
        //If we find an operand we do the related operation
        //since we've checked that the equation is valid, we can be sure that we have enough numbers in our number stack to do each respective operation
        else
        {
            //Reasoning behind using multiple if statements
            //Technically its faster since we don't have to check else (at least its that way in Java) because most programming languages generate the truth table and then evaluate.  Its a minor optimization, technically it'd be better to just figure out how to validate as we calculate if we wanted to save time complexity
            if(i == "+")
            {
                x = numberStack.pop();
                y = numberStack.pop();

                // in retrospect maybe having a class for each operation is overkill, but who knows, maybe we'd implement some funky abstract operation one day that has some weird valence, like sine or something
                value = add(y, x)
                numberStack.push(value)
            }
if(i == "-")
            {
                x = numberStack.pop();
                y = numberStack.pop();
                value = subtract(y, x)
                numberStack.push(value)
            }
if(i == "*")
            {
                x = numberStack.pop();
                y = numberStack.pop();
                value = multiply(y, x)
                numberStack.push(value)
            }
if(i == "/")
            {
                x = numberStack.pop();
                y = numberStack.pop();
                value = divide(y, x)
                numberStack.push(value)
            }
        }

    }
    return numberStack.pop();

}

module.exports = calculate