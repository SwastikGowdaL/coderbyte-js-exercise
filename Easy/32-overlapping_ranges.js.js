// Challenge
// Using the JavaScript language, have the function OverlappingRanges(arr) take the array of numbers 
//stored in arr which will contain 5 positive integers, the first two representing a range of numbers (a to b), 
//the next 2 also representing another range of integers (c to d), and a final 5th element (x) which will also be a positive integer, 
//and return the string true if both sets of ranges overlap by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] 
//then your program should return the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. 
//The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. 
//If both ranges do not overlap by at least x numbers, then your program should return the string false.

// Sample Test Cases
// Input:5,11,1,5,1
// Output:true
//
// Input:1,8,2,4,4
// Output:false
var pc = 0;

function OverlappingRanges(arr) {
    // var s=arr[0];
    // var e=arr[1];
    // var s1=arr[2];
    // var e1=arr[3];
    // var num=arr[4];
    var r1 = [];
    var r2 = [];

    for (i = arr[0], j = arr[2]; i <= arr[1], j <= arr[3]; i++, j++) {
        r1.push(i);
        r2.push(j);
    }
    num = arr[4];
    r2.forEach((val) => {
        if (r1.includes(val)) {
            pc++;
        }
    })
    if(pc==num){
        return true;
    }
    else{
        return false;
    }
}
console.log(OverlappingRanges([8,10,1,2,1]));
