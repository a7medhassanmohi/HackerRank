/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  // Write your code here
  let seaLevel = 0;
  let VillageNumb = 0;
  for (let i = 0; i < path.length; i++) {
    if (path[i] == "U") {
      if (seaLevel == -1) {
        VillageNumb++;
      }
      seaLevel++;
    } else {
      seaLevel--;
    }
  }
  return VillageNumb;
}

console.log(countingValleys(8, "UDDDUDUU"));
