const palindromes = function (str) {
    const array = str.toLowerCase().split('').reduce((arr, char)=> {
        if (char.toString().charCodeAt(0)>= 97 && char.toString().charCodeAt(0)<= 122) {
            arr.push(char);
        }
        return arr;
    }, []);
    const reverseArray = array.reduce((arr, letter)=> {
        arr.unshift(letter);
        return arr;
    }, [])
    reverseStr = reverseArray.join('');
    str = array.join('');
    return str === reverseStr ? true : false;
};

console.log(palindromes('ZZZZ car, a man, a maracaz.'));

// Do not edit below this line
module.exports = palindromes;
