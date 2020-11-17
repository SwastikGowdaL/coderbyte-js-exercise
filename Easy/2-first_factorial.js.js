// Challenge
// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return
//the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.
// Sample Test Cases
// Input:4
// Output:24
//
// Input:8
// Output:40320
let a = prompt();
let sum=1;
function FirstFactorial(num){
for(let i=1;i<=num;i++){
sum*=i;
}
console.log(sum);
}
FirstFactorial(a);