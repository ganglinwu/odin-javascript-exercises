const sumAll = function(intStart, intEnd) {
    // just in case intStart is greater than intEnd
    if (intStart>intEnd) {
        let temp=intStart;
        intStart=intEnd;
        intEnd=temp;
    }

    // check for negative numbers
    if (typeof(intStart) != "number" || typeof(intEnd)!= 'number') {
        return 'ERROR';
    }
    
    // check for non number type
    if (intStart <0 || intEnd<0) {
        return 'ERROR';
    }
    


    let sum = 0;
    for (let i = intStart; i<=intEnd; i++) {
        sum += i;
    }
    return sum;
};

sumAll(10, 1);

// Do not edit below this line
module.exports = sumAll;
