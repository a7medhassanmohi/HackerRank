/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */

function saveThePrisoner(n, m, s) {
  // Write your code here
  return ((m % n) + (s - 1)) % n || n;
}

console.log(saveThePrisoner(5, 19, 1));
