  // Challenge
  // Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify
  //it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet
  //(ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return
  //this modified string.
  // Sample Test Cases
  // Input:"hello*3"
  // Output:"Ifmmp*3"
  //
  // Input:"fun times!"
  // Output:"gvO Ujnft!"
  let a = prompt();
  let b = "";

  function LetterChanges(str) {

      for (let i = 0; i < str.length; i++) {
        let s = str.charCodeAt(i);
          if ((s >= 65 && s <= 90) || (s >= 97 && s <= 122)) {
              console.log("true");
            
              s += 1;
              if (s == 91) {
                  s = 65;
              } else if (s == 123) {
                  s = 97;
              }
              var fs = String.fromCharCode(s);
              if (fs == "a" || fs == "e" || fs == "i" || fs == "o" || fs == "u") {
                fs = fs.toUpperCase();
              }
              b += fs;
          } else {
              b += str[i];
              console.log("true1");
          }

      }

  }
  LetterChanges(a);
  console.log(b);
 