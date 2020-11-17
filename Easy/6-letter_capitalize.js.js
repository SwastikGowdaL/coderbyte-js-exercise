// Challenge
// Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and
//capitalize the first letter of each word. Words will be separated by only one space.
// Sample Test Cases
// Input:"hello world"
// Output:"Hello World"
//
// Input:"i ran there"
// Output:"I Ran There"

let a=prompt();
let b;
let d;
let e=[];
function LetterCapitalize(str){
    b=str.split(" ");
    b.forEach((c,i)=>{
    d=c.charAt(0).toUpperCase()+c.slice(1);
    e.push(d);
    console.log(i);
    })
    return e.join(" ");
}
console.log(LetterCapitalize(a));