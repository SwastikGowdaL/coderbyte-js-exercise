  // Challenge
  // Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters being passed,
  //divide num1 by num2, and return the result as a string with properly formatted commas.
  //If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1").
  //
  //For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346".
  // Sample Test Cases
  // Input:5 & num2 = 2
  // Output:"3"
  //
  // Input:6874 & num2 = 67
  // Output:"103"
  let a = prompt();
  let b = prompt();

  function DivisionStringified(num1, num2) {
      let val = num1 / num2;
      val = String(val);
      let val2 = "";
      switch (val.length) {
          case 1:
              console.log(val);
              break;
          case 2:
              console.log(val);
              break;
          case 3:
              console.log(val);
              break;
          case 4:
              for (let i = 0; i < val.length; i++) {
                  if (i == 1) {
                      val2 += ",";
                  }
                  val2 += val[i];
              }
              console.log(val2);
              break;
          case 5:
              for (let i = 0; i < val.length; i++) {
                  if (i == 2) {
                      val2 += ",";
                  }
                  val2 += val[i];
              }
              console.log(val2);
              break;
          case 6:
              for (let i = 0; i < val.length; i++) {
                  if (i == 1) {
                      val2 += ",";
                  }
                  if (i == 3) {
                      val2 += ",";
                  }
                  val2 += val[i];
              }
              console.log(val2);
              break;
          default:
              break;
      }

  }
  DivisionStringified(a, b);