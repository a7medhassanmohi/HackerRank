/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k  // the item he didn't  eat
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
  // Write your code here
  let afterDelItem = bill.filter((it, i) => i != k);
  let totalShare = afterDelItem.reduce((acc, curr) => acc + curr, 0);
  let diff = b - totalShare / 2;
  if (totalShare / 2 == b) {
    console.log("Bon Appetit");
  } else {
    console.log(diff);
  }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));
