const removeFromArray = function(arr, ...intToRemoveArray) {
    for (let i =0; i<intToRemoveArray.length; i++) {
        if (arr.includes(intToRemoveArray[i])) {
            indexToBeRemoved = arr.indexOf(intToRemoveArray[i]);
            arr.splice(indexToBeRemoved,1);
        }
        else {
            continue
        }
    }
    return arr
};

removeFromArray([1,2,3,4], 3);

// Do not edit below this line
module.exports = removeFromArray;
