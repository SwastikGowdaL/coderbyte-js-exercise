  
// Challenge
// Using the JavaScript language, have the function HammingDistance(strArr) take the array of strings stored 
//in strArr, which will only contain two strings of equal length and return the Hamming distance between them. 
//The Hamming distance is the number of positions where the corresponding characters are different. 
//For example: if strArr is ["coder", "codec"] then your program should return 1. The string will always be of 
//equal length and will only contain lowercase characters from the alphabet and numbers.
// Sample Test Cases
// Input:"10011", "10100"
// Output:3
//
// Input:"helloworld", "worldhello"
// Output:8
var pc=0;
function HammingDistance(strArr){
    var s1=strArr[0];
    var s2=strArr[1];
    for(i=0;i<s1.length&&i<s2.length;i++){
    if(s1[i]!==s2[i]){
        pc++;
    }
    }
    return pc;
}
console.log(HammingDistance(["helloworld", "worldhello"]));
