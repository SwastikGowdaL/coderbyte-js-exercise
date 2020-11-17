// Challenge
// Using the JavaScript language, have the function BitwiseOne(strArr) take the array of strings stored in strArr,
//which will only contain two strings of equal length that represent binary numbers, and return a final binary string
//that performed the bitwise OR operation on both strings. A bitwise OR operation places a 0 in the new string where
//there are zeroes in both binary strings, otherwise it places a 1 in that spot. For example:
//if strArr is ["1001", "0100"] then your program should return the string "1101"
// Sample Test Cases
// Input:"100", "000"
// Output:"100"
//
// Input:"00011", "01010"
// Output:"01011"

function BitwiseOne(strArr) {
    var r = "";
    for (let i = 0; i < strArr[0].length; i++){
        if (strArr[0][i] == 1 || strArr[1][i] == 1) {
            r += "1";
        }
    else {
        r += "0";
    }
    }
    return r;
}
console.log(BitwiseOne(["00011", "01010"]));