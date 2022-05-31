/* 

a=[2,6]
b=[24,36]

explanation
? a    //multiple
2:  2,4,6,8,10,12,14,16
6:  6,12,18,24

?b    //factorial   whats is the numbers that divide by it
24: 2,3,4,6,12,24
36: 2,3,4,6,9,12,18,36

answer
6,12
*/

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  // Write your code here
  let numbers = 0;
  for (let i = 1; i <= 100; i++) {
    if (a.every((it) => i % it === 0)) {
      if (b.every((it) => it % i === 0)) {
        numbers++;
      }
    }
  }
  return numbers;
}
