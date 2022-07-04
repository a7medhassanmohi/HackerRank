/* 
example
 n=6
 p=2
 If the student starts turning from page 1, they only need to turn 1 page:
 If a student starts turning from page 6, they need to turn 2 pages:

 minium number of page     answer 1

*/

/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
  // Write your code here
  let filpNumb = 0;
  let pageNumb = [];
  let left = Math.abs(1 - p); //3
  let right = Math.abs(n - p); //1
  if (left < right) {
    for (let i = 0; i < n; i++) {
      if (i == 0) {
        pageNumb[0] = 1;
        pageNumb[1] = 1;
      } else {
        pageNumb[0] = pageNumb[1] + 1;
        pageNumb[1] = pageNumb[1] + 2;
      }

      if (pageNumb[0] == p || pageNumb[1] == p) {
        return filpNumb;
      } else {
        filpNumb++;
      }
    }
  } else {
    for (let i = n; i > 0; i--) {
      if (i == n) {
        pageNumb[0] = n;
        n % 2 == 0 ? (pageNumb[1] = n) : (pageNumb[1] = n - 1);
      } else {
        pageNumb[0] = pageNumb[1] - 1;
        pageNumb[1] = pageNumb[1] - 2;
      }

      if (pageNumb[0] == p || pageNumb[1] == p) {
        return filpNumb;
      } else {
        filpNumb++;
      }
    }
  }
}

console.log(pageCount(5, 4));
