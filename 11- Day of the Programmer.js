/* 

Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.

From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.

In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:

            Divisible by 400.
            Divisible by 4 and not divisible by 100.
Given a year, , find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .

For example, the given y = 1984. 1984 is divisible by 4, so it is a leap year. The 256th day of a leap year after 1918 is September 12, so the answer is   12.9.1984 

ex
y=2017
n the year  y= 2017, January has 31 days, February has 28 days, March has 31 days, April has 30 days, May has 31 days, June has 30 days, July has 31 days, and August has 31 days. When we sum the total number of days in the first eight months, we get 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243. Day of the Programmer is the 256th day, so then calculate 256 - 243 = 13 to determine that it falls on day 13 of the 9th month (September). We then print the full date in the specified format, which is 13.09.2017.

*/

/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
  // Write your code here
  let totalDays = 0;
  let month = 0;
  let numberOfDay = 0;

  function monthDays(isleap = false) {
    return {
      1: 31,
      2: isleap ? 29 : 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
    };
  }

  if (year >= 1919) {
    //gergorian calendar
    //check leap year
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      for (let i in monthDays(true)) {
        if (totalDays <= 225) {
          month = i;
          totalDays += monthDays(true)[i];
        }
      }
    } else {
      for (let i in monthDays(false)) {
        if (totalDays <= 225) {
          month = i;

          totalDays += monthDays(false)[i];
        }
      }
    }
  } else {
    //  Julian calendar
    //check leap year
    if (year % 4 == 0) {
      for (let i in monthDays(true)) {
        if (totalDays <= 225) {
          month = i;

          totalDays += monthDays(true)[i];
        }
      }
    } else {
      for (let i in monthDays(false)) {
        if (totalDays <= 225) {
          month = i;

          totalDays += monthDays(false)[i];
        }
      }
    }
  }
  numberOfDay = 256 - totalDays;
  month = +month + 1;
  if (year == 1918) {
    numberOfDay += 13;
  }

  return `${numberOfDay < 10 ? "0" + numberOfDay : numberOfDay}.${
    month < 10 ? "0" + month : month
  }.${year}`;
}

console.log(dayOfProgrammer(1918));
