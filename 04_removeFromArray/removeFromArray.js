const removeFromArray = function(array, ...num) {
    const length = array.length
    if (num.length > 0) {
    for (i = 0; i < length; i++) {
        if (array.indexOf(num[i]) === -1) continue;
        let findNum = array.indexOf(num[i]);
        array.splice(findNum, 1) }
    } else {
        let findNum = array.indexOf(num[0]);
        array.splice(findNum, 1);
        }
        return array
    }



//Remember to store the elements of the array in a variable, so the loop and iterate through all

// Do not edit below this line
module.exports = removeFromArray;
