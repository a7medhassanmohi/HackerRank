/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n   // length of array
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

/* 
Given an array of integers and a positive integer k , determine the number of (i,j) pairs where i<j and ar[i]  + ar[j]  is divisible by k .


example
ar=[1,2,3,4,5,6]
k=5
output  [1,4],[2,3],[4,6], ==>3
*/

function divisibleSumPairs(n, k, ar) {
  // Write your code here

  let chunkArr = [];
  ar.forEach((it, num) => {
    for (let i = num; i < n; i++) {
      if (num == i) continue;
      chunkArr.push([it, ar[i]]);
    }
  });
  return chunkArr.filter((it) => {
    if ((it[0] + it[1]) % k === 0) {
      return it;
    }
  }).length;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
