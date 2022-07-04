/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
  // Write your code here
  const resultt = [];
  const unique = [...new Set(a)];
  unique.forEach((it, i) => {
    resultt.push(a.filter((s) => s === it || s === it + 1));
  });

  return Math.max(...resultt.map((it) => it.length));
}

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));
