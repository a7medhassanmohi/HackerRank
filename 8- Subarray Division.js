/* 

Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

  ** The length of the segment matches Ron's birth month, and,
  **The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.

example
s=[2,2,1,3,2]
d=4
m=2

output [1,3] and [2,2]

output 2

*/

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d  //day
 *  3. INTEGER m  // month
 */

function birthday(s, d, m) {
  // Write your code here
  let chunkedArray = [];
  for (let i = 0; i <= s.length; i++) {
    chunkedArray.push(s.slice(i, i + m));
  }
  console.log(chunkedArray);
  return chunkedArray.filter((it) => {
    if (it.length == m && it.reduce((ac, cu) => ac + cu, 0) == d) {
      return it;
    }
  }).length;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
