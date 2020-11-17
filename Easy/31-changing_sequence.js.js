// Challenge
// Using the JavaScript language, have the function ChangingSequence(arr) take the array of numbers stored 
//in arr and return the index at which the numbers stop increasing and begin decreasing or stop decreasing 
//and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is 
//the last point in the array where the numbers were increasing and the next number begins a decreasing sequence. 
//The array will contain at least 3 numbers and it may contains only a single sequence, increasing or decreasing. 
//If there is only a single sequence in the array, then your program should return -1. Indexing should begin with 0.
// Sample Test Cases
// Input:-4, -2, 9, 10
// Output:-1
//
// Input:5, 4, 3, 2, 10, 11
// Output:3
var a = 0;
var b = [];
var a1 = 0;
var b1 = [];

function ChangingSequence(arr) {
    if (arr[1] > arr[0]) {
        for (let i = 0; i < arr.length; i++) {
            k=i;
            k++;
            if (arr[i] > arr[k]) {
                a = 1;
                b.push(i);
            }
        }
        if (a == 1) {
            return b[0];
        } else {
            return -1;
        }
    }

    if (arr[1] < arr[0]) {
        for (let i = 0; i < arr.length; i++) {
            k=i;
            k++;
            if (arr[i] < arr[k]) {
                a1 = 1;
                b1.push(i);
            }
        }
        if (a1 == 1) {
            return b1[0];
        } else {
            return -1;
        }
    }
}

console.log(ChangingSequence([-4, -2, 9, 10])); 