// Challenge
// Using the JavaScript language, have the function ThirdGreatest(strArr) take the array of strings stored in strArr and
//return the third largest word within in. So for example: if strArr is ["hello", "world", "before", "all"] your output
//should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world
//because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output
//should be after because the first three words are all 5 letters long, so return the last one. The array will have at least
//three strings and each string will only contain letters.
// Sample Test Cases
// Input:"coder","byte","code"
// Output:"code"
//
// Input:"abc","defg","z","hijk"
// Output:"abc"

let arr = prompt();
var a = 0;
var ai;
var b = 0;
var b1;
var c = 0;
var ci;
var pc=0;
function ThirdGreatest(str) {
console.log(str);
    for (var i = 0; i < str.length; i++) {
        if (str.length > a) {
            a = str.length;
            ai = i;
        } else if (str.length === a) {
            b = str.length;
            bi = i;
            pc++;
        } else if (str.length > b) {
            b = str.length;
            bi = i;

        } else if (str.length === b) {
            c = str.length;
            ci = i;
            pc1++;
        } else if (str.length > c) {
            c = str.length;
            ci = i;
        }

    }

    console.log(str[ci]);

}
var arr2=arr.split(",");
ThirdGreatest(arr2);