// Challenge
// Using the JavaScript language, have the function PowersofTwo(num) take the num parameter being passed which will be an
//integer and return the string true if it's a power of two. If it's not return the string false.
//For example if the input is 16 then your program should return the string true but if the input is 22 then the
//output should be the string false.
// Sample Test Cases
// Input:4
// Output:"true"
//
// Input:124
// Output:"false"

var a=parseInt(prompt());

PowersofTwo=(num)=>{
    var res=0;
    var i=0;
while(res<a){
    res=2**i;
    if(res==a){
        return true;
    }
    i++;
}    
return false;
}
console.log(PowersofTwo(2));
