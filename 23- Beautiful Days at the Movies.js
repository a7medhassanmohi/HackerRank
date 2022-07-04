/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i  start day
 *  2. INTEGER j   end day
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
  // Write your code here
  let beautiful = 0;
  for (let x = i; x <= j; x++) {
    let reverseNum = +x.toString().split("").reverse().join("");

    if (Math.abs(x - reverseNum) % k === 0) {
      beautiful++;
    }
  }
  return beautiful;
}

console.log(beautifulDays(20, 23, 6));
