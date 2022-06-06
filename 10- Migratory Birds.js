/* 


given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

Example

arr=[1,1,2,2,3]
There are two each of types 1  and 2 , and one sighting of type 3 . Pick the lower of the two types seen twice: type .
*/

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  // Write your code here
  let maxlength = 0;
  let minvalue = 0;
  const obj = {};

  arr.forEach((it) => {
    if (obj[it]) {
      obj[it]++;
    } else {
      obj[it] = 1;
    }
  });

  for (let it in obj) {
    if (obj[it] > maxlength) {
      maxlength = obj[it];
      minvalue = it;
    } else if (obj[it] == maxlength) {
      if (minvalue > it) {
        minvalue = it;
      }
    }
  }
  return minvalue;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4, 2]));
