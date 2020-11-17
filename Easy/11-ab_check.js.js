  // Challenge
  // Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string
  //true if the characters a and b are separated by exactly 3 places anywhere in the string at least once
  //(ie. "lane borrowed" would result in true because there is exactly three characters between a and b).
  //Otherwise return the string false.
  // Sample Test Cases
  // Input:"after badly"
  // Output:"false"
  //
  // Input:"Laura sobs"
  // Output:"true"
  let str = prompt();

  const ABCheck = (str) => {
      for (let i = 0; i < str.length; i++) {
          if (str[i] == "a") {
              let b = i + 4;
              if (str[b] == "b") {
                  return true;
              }
          }
      }
      return false;
  }
  console.log(ABCheck(str));

  const AB = (str) => {
      var patt1 = /a...b/;
      if (str.match(patt1)) {
          return true;
      }
      return false;
  }
  console.log(AB(str));
