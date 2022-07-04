/* 

There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

example
n=7
ar=[1,2,1,2,1,3,2]
here is one pair of color 1  and one of color 2 . There are three odd socks left, one of each color. The number of pairs is 2 .
*/

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here
  let PairNumb = 0;
  const numOfPair = ar.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  for (let i in numOfPair) {
    if (numOfPair[i] >= 2) {
      PairNumb += Math.floor(numOfPair[i] / 2);
    }
  }
  return PairNumb;
}
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
