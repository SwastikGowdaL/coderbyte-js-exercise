// Challenge
// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the
//largest word in the string. If there are two or more words that are the same length, return the first word from the string
//with that length. Ignore punctuation and assume sen will not be empty.
// Sample Test Cases
// Input:"fun&!! time"
// Output:"time"
//
// Input:"I love dogs"
// Output:"love"

let a=prompt();

striping=(str)=>{
    b="";
    for(let i=0;i<str.length;i++){
        s=str.charCodeAt(i);
      if((s>=65&&s<=90)||(s>=97&&s<=122)){
          b+=str[i];
      }
    }
    return b;
} 

LongestWord=(sen)=>{
    let splsen=sen.split(" ");
    var longest="";
    for(val of splsen){
        let stripped=striping(val);
        if(longest.length<stripped.length){
            longest=stripped;
        }
    }
    return longest;
}


console.log(LongestWord(a));