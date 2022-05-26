/* 
You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location x1 and moves at a rate of v1  meters per jump.
The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.



*/

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let postion1 = x1;
  let postion2 = x2;
  for (let i = 0; ; i++) {
    if (postion2 > postion1 && v2 > v1) return "NO";
    if (postion1 > postion2 && v1 > v2) return "NO";
    if (postion1 !== postion2 && v1 == v2) return "NO";
    if (postion1 == postion2) return "YES";
    postion1 += v1;
    postion2 += v2;
  }
}
console.log(kangaroo(0, 3, 4, 2));
