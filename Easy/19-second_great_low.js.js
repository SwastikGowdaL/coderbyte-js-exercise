// Challenge
// Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return
//the second lowest and second greatest numbers, respectively, separated by a space.
//For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain
//at least 2 numbers. It can get tricky if there's just two numbers!

// Sample Test Cases
// Input:1, 42, 42, 180
// Output:"42 42"
//
// Input:4, 90
// Output:"90 4"
let a = prompt();

function SecondGreatLow(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr);
    console.log(arr[arr.length - 2]);
    console.log(arr[1]);
}
var arr2 = [];
var arr = a.split(",");

let array = arr.map(function (el) {
    return el.trim();
});
array.forEach((val) => {
    arr2.push(parseInt(val));
})
SecondGreatLow(arr2);