// Challenge
// Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters being passed and return the
//string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each
//other then return the string -1.
// Sample Test Cases
// Input:3 & num2 = 122
// Output:"true"
//
// Input:67 & num2 = 67
// Output:"-1"
var a=prompt();
var b=prompt();
function CheckNums(num1,num2){
if(num2>num1){
    console.log("true");
}
else if(num2<num1){
    console.log("false");
}
else{
    console.log("-1");
}
}
CheckNums(a,b);