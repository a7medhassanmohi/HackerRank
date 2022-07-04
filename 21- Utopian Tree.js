/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
  // Write your code here
  let totalHight = 0;
  for (let i = 0; i <= n; i++) {
    if (i == 0) {
      totalHight = 1;
    }
    if (i > 0 && i % 2 == 0) {
      totalHight++;
    }
    if (i > 0 && i % 2 != 0) {
      totalHight *= 2;
    }
  }
  return totalHight;
}

console.log(utopianTree(3));
