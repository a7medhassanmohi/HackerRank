/* 
convert time from 12 to 24 
input:string  hh:mm:ssAM or hh:mm:ssPM
output:string  hh:mm:ss

ex 01:05:39AM ==> 01:05:39
ex 05:05:39PM ==> 17:05:39
ex 12:05:39AM ==> 00:05:39
*/
function timeConversion(s) {
  // Write your code here
  let newformate = "";
  const hour = s.slice(0, 2);
  const min = s.slice(3, 5);
  const sec = s.slice(6, 8);
  const timeIndicator = s.slice(-2);
  if (timeIndicator == "PM") {
    if (parseInt(hour) < 12) {
      newformate = `${parseInt(hour) + 12}:${min}:${sec}`;
    } else {
      newformate = `${hour}:${min}:${sec}`;
    }
  } else {
    if (parseInt(hour) == 12) {
      newformate = `00:${min}:${sec}`;
    } else {
      newformate = `${hour}:${min}:${sec}`;
    }
  }
  return newformate;
}
console.log(timeConversion("12:05:39AM"));
