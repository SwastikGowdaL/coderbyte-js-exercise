  // Challenge
  // Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case of each character.
  //For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.
  // Sample Test Cases
  // Input:"Hello-LOL"
  // Output:"hELLO-lol"
  //
  // Input:"Sup DUDE!!?"
  // Output:"sUP dude!!?"
  let a = prompt();
  let pat1 = /[a-z]/;
  let pat2 = /[A-Z]/;
  let b = [];

  function SwapCase(str) {
      for (let i = 0; i < str.length; i++) {
          let c = str[i];

          if (c.match(pat1)) {
              b.push(c.toUpperCase());
          } else if (c.match(pat2)) {
              b.push(c.toLowerCase());
          } else {
              b.push(c);
          }
      }
      console.log(b.join(""));

  }

  SwapCase(a);