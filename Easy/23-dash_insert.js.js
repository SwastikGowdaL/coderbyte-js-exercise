// Challenge
// Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str.
//For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
// Sample Test Cases
// Input:99946
// Output:9-9-946
//
// Input:56730
// Output:567-30
let a = prompt();
let arr = [];

function DashInsert(str) {
    for (let i = 0; i < str.length; i++) {
        let b = i + 1;
        if (parseInt(str[i]) % 2 != 0 && parseInt(str[b]) % 2 != 0) {

            arr.push(str[i]);
            arr.push("-");
        } else {
            arr.push(str[i]);
        }
    }
    console.log(arr.join(""));
}
DashInsert(a);