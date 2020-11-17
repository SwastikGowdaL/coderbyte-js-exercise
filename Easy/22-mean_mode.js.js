// Challenge
// Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored in arr and
//return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1
//because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and
//will not contain more than one mode.
// Sample Test Cases
// Input:1, 2, 3
// Output:0
//
// Input:4, 4, 4, 6, 2
// Output:1

let a = prompt();
let lon = 1;
let index = -1;

function MeanMode(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    let tot = arr.length;
    let mean = sum / tot;

    for (let i = 0; i < tot; i++) {
        var count = 0;
        arr.forEach((v) => (v === arr[i] && count++));
        if (count > lon) {
            lon = count;
            index = i;
        }
    }

    if (index == -1) {
        console.log("0");
    } else if (arr[index] == mean) {
        console.log("1");
    }
}
let a2 = a.split(",");
let a3 = [];
a2.forEach((val) => {
    a3.push(parseInt(val.trim()));
})
MeanMode(a3);