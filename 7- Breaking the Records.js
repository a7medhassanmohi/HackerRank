/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

/*                               Count
Game  Score  Minimum  Maximum   Min Max
 0      12     12       12       0   0
 1      24     12       24       0   1
 2      10     10       24       1   1
 3      24     10       24       1   1 */

function breakingRecords(scores) {
  // Write your code here
  let min;
  let max;
  let minCount = 0;
  let maxCount = 0;
  scores.forEach((it, i) => {
    if (i === 0) {
      min = it;
      max = it;
    } else {
      if (it > max) {
        max = it;
        maxCount++;
      }
      if (it < min) {
        min = it;
        minCount++;
      }
    }
  });

  return [maxCount, minCount];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
