function isOperand(a){
    if(a == '+' || a == '-' || a == '/' || a == '*')
    {
        return true;
    }
    return false;
}

module.exports = isOperand