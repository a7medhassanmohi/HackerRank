/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
  // Write your code here
  let result = BigInt(1);
  Array.from({ length: n }).forEach((it, i) => {
    result *= BigInt(i + 1);
  });
  console.log(result.toString());
}

extraLongFactorials(30);
