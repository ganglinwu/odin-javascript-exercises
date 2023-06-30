const fibonacci = function(input) {
    if (input == 1) {
        return 1;
    }
    else if (input == 2) {
        return 1;
    }
    else if (input <= 0) {
        return 'OOPS'
    }
    else {
        return fibonacci(input-1) + fibonacci(input-2);
    }

};

// Do not edit below this line
module.exports = fibonacci;
