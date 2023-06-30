const palindromes = function (str) {
    const array = str.toLowerCase().split('');
    const reverseArray = array.reduce((arr,letter)=>{
        if (letter.toString().charCodeAt(0)>= 97 && letter.toString().charCodeAt(0)<= 122) {
            arr.unshift(letter);
        }
        return arr;
    },[])
    reverseStr = reverseArray.join('');
    return (str === reverseStr) ? true : false;
};

console.log('1 ' + palindromes('racecar'));
console.log('2 ' + palindromes('racecar!'));
console.log('3 ' + palindromes('Racecar!'));

// need to think of a way to exclude punctuation

// Do not edit below this line
module.exports = palindromes;
