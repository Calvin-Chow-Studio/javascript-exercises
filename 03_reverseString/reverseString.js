

const reverseString = function(string) {
let arraySplit = string.split("");
let arrayRev = arraySplit.reverse();
let arrayRevJoin = arrayRev.join("")
return arrayRevJoin;
}


reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
