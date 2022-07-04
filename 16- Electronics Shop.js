/*
 * Complete the getMoneySpent function below.
 */

/* 
example 
b=60
keyboards=[40,50,60]
drives =[5,8,12]
The person can buy a 40 keyboard +12 usb=52 , or a 50 keyboard +8 usb=58  . Choose the latter as the more expensive option and return 58 .
*/

function getMoneySpent(keyboards, drives, b) {
  /*
   Write your code here.
   */
  let totalPrice = 0;
  keyboards.forEach((it) => {
    drives.forEach((dr) => {
      if (it + dr <= b) {
        if (it + dr > totalPrice) {
          totalPrice = it + dr;
        }
      }
    });
  });
  return totalPrice ? totalPrice : -1;
}

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60));
