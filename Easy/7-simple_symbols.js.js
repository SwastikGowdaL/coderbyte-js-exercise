// Challenge
// Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if
//it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols
//with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded
//by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.
// Sample Test Cases
// Input:"+d+=3=+s+"
// Output:"true"
//
// Input:"f++d+"
// Output:"false"

let a = prompt();
let b;
let c = "t";

function SimpleSymbols(str) {
    for (let i = 0; i < str.length; i++) {
        let s = str.charCodeAt(i);
        if ((s >= 65 && s <= 90) || (s >= 97 && s <= 122)) {
            let it = i + 1;
            let it2 = i - 1;
            if (str[it] == "+" && str[it2] == "+") {
                b = "t";
            } else {
                c = "f";
            }
        }
    }

    if (c == "t" && b == "t") {
        return "true";
    } else {
        return "false";
    }
}
console.log(SimpleSymbols(a));