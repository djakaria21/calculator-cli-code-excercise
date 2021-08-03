const validate = require("./utility/validate.js")

const polish_calcuator = {
    calculate: function(array_to_be_processed){
        return array_to_be_processed[0];
    },
    is_valid: function(array_to_be_processed){
        return validate(array_to_be_processed);
    }

};
module.exports = polish_calcuator;