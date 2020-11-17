// Challenge
// Using the JavaScript language, have the function Superincreasing(arr) take the array of numbers stored in arr 
//and determine if the array forms a superincreasing sequence where each element in the array is greater than the 
//sum of all previous elements. The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] 
//then your program should return the string "true" because it forms a superincreasing sequence. If a superincreasing 
//sequence isn't formed, then your program should return the string "false"
// Sample Test Cases
// Input:1,2,3,4
// Output:"false"
//
// Input:1,2,5,10
// Output:"true"
var b = 0;

function Superincreasing(arr) {
    for (i = arr.length - 1; i >= 1; i--) {
        var sum = 0;
        for (j = 0; j < i; j++) {
            sum += arr[j];
        }
        if (sum > arr[i]) {
            return false;
        }
    }
    return true;
}
console.log(Superincreasing([1,2,5,10]));