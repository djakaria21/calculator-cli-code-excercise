
const polish_calcuator = {
    calculate: function(array_to_be_processed){
        return array_to_be_processed[0];
    },
    is_valid: function(array_to_be_processed){
        split_array = array_to_be_processed.split(/[\s,]+/);
        if(split_array.length == 1){
            if (split_array[0] == "")
            {
                throw new Error('Empty Equation');
            }
            if(isOperand(split_array[0]))
            {
                throw new Error('Invalid Amount of Numbers per Operators')
            }
            else{
                return true;
            }
        }
        else{
        let operand_count = 0;
        let number_count = 0;

        for (const i of split_array){
            if (isOperand(i))
            {
                operand_count += 1;
            }
            else{
                number_count += 1;
            }

        }

        if(number_count -1 != operand_count){
            throw new Error('Invalid Amount of Numbers per Operators');
        }
        
        return true;
        }
    }

};

function isOperand(a){
    if(a == '+' || a == '-' || a == '/' || a == '*')
    {
        return true;
    }
    return false;
}

module.exports = polish_calcuator;