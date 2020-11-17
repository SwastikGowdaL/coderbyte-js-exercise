// Challenge
// Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num.
//For the test cases, the parameter num will be any number from 1 to 1000.
// Sample Test Cases
// Input:12
// Output:78
//
// Input:140
// Output:9870
let a=prompt();
let b=0;


function Sg(num){

for(let i=1;i<=num;i++){
    b+=i;
}
return b;
}

let sg1=function(num){
if(num==0){
    return 0;
}
else{
    return num + sg1(num-1);
}
}
let t1=performance.now();
let c=Sg(a);
let t2=performance.now();

console.log(c);
console.log((t2-t1)); 

a=parseInt(a);
let t3=performance.now();
d=sg1(a);
let t4=performance.now();
console.log(d);
console.log((t4-t3)); 