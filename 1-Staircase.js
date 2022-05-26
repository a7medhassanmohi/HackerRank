/*
n: number = 5;
 output should =
    #
   ##
  ###
 ####
#####
 */
function staircase(n) {
  // Write your code here
  let code = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      j < n - 1 - i ? (code += " ") : (code += "#");
    }
    code += "\n";
  }
  console.log(code);
}

staircase(5);
