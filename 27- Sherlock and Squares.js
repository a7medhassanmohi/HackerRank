/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(a, b) {
  // Write your code here
  let aa = Math.ceil(Math.sqrt(a));
  let bb = Math.floor(Math.sqrt(b));
  let all = [];
  let count = 0;
  let numberSqrt = Math.abs(aa - bb) + 1;
  if (a == b && Math.sqrt(a) % 1 === 0) return 1;
  if (Math.floor(Math.sqrt(b)) == Math.floor(Math.sqrt(a))) return 0;
  return numberSqrt;
}

console.log(squares(4, 4));
