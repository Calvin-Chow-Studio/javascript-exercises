const repeatString = function(string,num) {
    let concatString = '';
    for (i = 0; i < num; i++) {
        concatString += string;
    } if (num < 0) {
        return "ERROR";
    } else {
        return concatString;
    }
}

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;