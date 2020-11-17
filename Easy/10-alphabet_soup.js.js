// Challenge
// Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter being passed
//and return the string with the letters in alphabetical order (ie. hello becomes ehllo).
//Assume numbers and punctuation symbols will not be included in the string.
// Sample Test Cases
// Input:"coderbyte"
// Output:"bcdeeorty"
//
// Input:"hooplah"
// Output:"ahhloop"
let a=prompt();
let b=a.split("");
console.log(b.sort().join(""));

