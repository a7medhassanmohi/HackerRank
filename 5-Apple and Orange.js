/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s start position of house
 *  2. INTEGER t end position of house
 *  3. INTEGER a position of apple tree
 *  4. INTEGER b position of orange tree
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  const applesNewPosition = apples.map((it) => {
    return it + a;
  });
  const orangesNewPosition = oranges.map((it) => {
    return it + b;
  });
  console.log(
    applesNewPosition.filter((apple) => {
      if (apple >= s && apple <= t) {
        return apple;
      }
    }).length
  );
  console.log(
    orangesNewPosition.filter((orange) => {
      if (orange >= s && orange <= t) {
        return orange;
      }
    }).length
  );
}
