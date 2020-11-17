  
// Challenge
// Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the
//string in reversed order.
// Sample Test Cases
// Input:"coderbyte"
// Output:"etybredoc"
//
// Input:"I Love Code"
// Output:"edoC evoL I"
let a=prompt();

function FirstReverse(str){
console.log(str);
let b=str.split("").reverse().join("");
return b;
}
c=FirstReverse(a);
console.log(typeof(c));
