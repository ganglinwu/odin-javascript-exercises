function repeatString(str, int){
    if (int >= 0) {
        return str.repeat(int);
    }
    else {
        return 'ERROR'
    }
};

repeatString('hey',3);

// Do not edit below this line
module.exports = repeatString;
