// Challenge
// Using the JavaScript language, have the function MultiplicativePersistence(num) take the num parameter being passed
//which will always be a positive integer and return its multiplicative persistence which is the number of times you must
//multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3
//because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.
// Sample Test Cases
// Input:4
// Output:0
//
// Input:25
// Output:2

//As the input num grows in size you have to deal with scientific notation and auto rounding that may eliminate digits
//To avoid any errors, enter all numbers as a string. The function below will also work with number inputs, but does not
//account for any rounding or scientific notation
var a = prompt();

function MultiplicativePersistence(num) {
    var pc = 0;
    for (;;) {
        if (num.length > 1) {
            pc++;
            var arr = num.split("");
            var b = 1;
            arr.forEach((val) => {
                b *= parseInt(val);
            })
            num = String(b);
        } else {
            return pc;
        }
    }

}
if (a.length == 1) {
    console.log("0");
} else {
  console.log(MultiplicativePersistence(a)); 
}