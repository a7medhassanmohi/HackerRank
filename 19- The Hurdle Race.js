/* 
example
k=4
height=[1,6,3,5,2]
Dan's character can jump a maximum of k=4  units, but the tallest hurdle has a height of :h1=6 
To be able to jump all the hurdles, Dan must drink  6-4=2 doses.
*/

/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
  // Write your code here
  const maxHigh = Math.max(...height);
  if (k >= maxHigh) return 0;
  return maxHigh - k;
}

console.log(hurdleRace(7, [2, 5, 4, 5, 2]));
