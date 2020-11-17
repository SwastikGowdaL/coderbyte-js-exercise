// Challenge
// Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed which
//will always be a positive integer and return its additive persistence which is the number of times you must add the
//digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2
//because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.
// Sample Test Cases
// Input:4
// Output:0
//
// Input:19
// Output:2

// var a = prompt();

// function AdditivePersistence(num) {
//     if (num.length == 1) {
//         return 0;
//     }
//     var con = 0;
//     var b=[];
//     var g=[];
//     for(let i=0;i<num.length;i++){
//         b.push(parseInt(num[i]));
//     }
//     while (b.length > 1) {
//         g=[];
//         for(let i=0;i<b.length;i++){
//             g.push(parseInt(b[i]));
//         }
//         b=g;
//         var c = b.reduce((a1, b1) => a1 + b1, 0);
//         b=[];
//         for(let i=0;i<c.length;i++){
//             b.push(String(c[i]));
//         }
//         con+=1;
//     }
//     return con;
// }
// console.log(AdditivePersistence(a));


var a = prompt();

function MultiplicativePersistence(num) {
    var pc = 0;
    for (;;) {
        if (num.length > 1) {
            pc++;
            var arr = num.split("");
            var b = 1;
            arr.forEach((val) => {
                b += parseInt(val);
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
