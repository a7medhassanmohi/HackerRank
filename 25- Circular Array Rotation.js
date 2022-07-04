/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */

function circularArrayRotation(a, k, queries) {
  // Write your code here

  const result = [];
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop());
  }
  queries.forEach((it, i) => {
    result[i] = a[it];
  });

  return result;
}
circularArrayRotation([3, 4, 5], 2, [1, 2]);
