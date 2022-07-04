/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
  // Write your code here
  let countYes = 0;
  a.forEach((it) => {
    if (it <= 0) {
      countYes++;
    }
  });
  if (countYes >= k) {
    return "NO";
  } else {
    return "YES";
  }
}

console.log(angryProfessor(2, [0, -1, 2, 1]));
