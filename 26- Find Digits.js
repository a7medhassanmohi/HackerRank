/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
  // Write your code here
  let count = 0;
  n.toString()
    .split("")
    .forEach((it) => {
      if (n % +it == 0) {
        count++;
      }
    });
  return count;
}
console.log(findDigits(1012));
