const reverseString = function(str) {
    let reverseArray = [];
    for (let i = 1; i<=str.length; i++) {
        reverseArray.push(str.at(-1*i));
    }
    return reverseArray.join('')
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
