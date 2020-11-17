// Challenge
// Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word
//with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because
//it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1.
//Words will be separated by spaces.
// Sample Test Cases
// Input:"Hello apple pie"
// Output:"Hello"
//
// Input:"No words"
// Output:-1

// var letterCount = function(str) {

//     var strArrWords = []
//     var counter = 0;
//     var high = 0;
//     var position;
//     var strArr = str.toLowerCase().split(" "); //create array of words


//     for (var i = 0; i < strArr.length; i++) {
//         strArrWords.push(strArr[i].split("").sort()); //create array of letters (alphabetized) wthin each word in array
//     }

//     for (var j = 0; j < strArrWords.length; j++) { // loop through every word in word array
//         word = strArrWords[j];
//         counter = 0; //reset counter to zero for next word (don't reset high)
//         // console.log(word.length)
//         for (var k = 0; k < word.length; k++) { //loop through every letter in each word
//             if (word[k + 1] === word[k]) { //user letter counter and assign highest / track position of highest
//                 counter++
//                 if (counter > high) {
//                     high = counter;
//                     position = j;
//                     // console.log("high =" + high + " position =" + position)
//                 }
//             }
//             // console.log(word[k] + " word " + j + " letter " + k)
//         }

//     }

//     // console.log(strArr[position])
//     // console.log(strArrWords)
//     // console.log(strArrWords[0])


//     return strArr[position]
// }
// console.log(letterCount("apple boobb cactcc daad"));

// let str=prompt();
// let l=0;
// function LetterCountI(arr){
// for(var val of arr){
//     var c=[];
//     let pc=0;
//     for(let i=0;i<val.length;i++){
//     if(c.includes(val[i])){
//         pc+=1;
//         if(pc>l){
//             l=pc;

//         }
//     }
//     else{
//        c.push(val[i]); 
//     }
//     }
// }
// }
// let arr=str.split(" ");
// console.log(LetterCountI(arr));

var str = prompt();
var letter;
var h = 1;
var count;
function LetterCountI(arr) {
    for (var val of arr) {
        var b = val.split("");
       count = 0;
        let cnt;
        for (let i = 0; i < val.length; i++) {
           b.forEach((v) => (v === b[i] && count++));
           cnt=count;
            if (cnt > h) {
                h = cnt;
                letter=val;
            }
            count = 0;
        }
    }
}
var arr = str.split(" ");
LetterCountI(arr);
if(arr.includes(letter)){
    console.log(letter);
}
else{
    console.log("-1");
}