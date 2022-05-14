/* 
Student  received a 73 , and the next multiple of 5  from 73 is 75. Since 75.73 <3 , the student's grade is rounded to 75 .
Student 2 received a 67, and the next multiple of 5 from 67 is 70. Since 70-67=3, the grade will not be modified and the student's final grade is 67.
Student  received a 38, and the next multiple of 5 from 38  is 40. Since  40-38<3, the student's grade will be rounded to 40 .
Student  received a grade 33 and this grade is below 38 , so the grade will not be modified and the student's final grade is 33.
*/

function gradingStudents(grades) {
  // Write your code here
  return grades.map((it) => {
    if (it < 38) {
      return it;
    } else if (it % 5 == 0) {
      return it;
    } else if (it % 5 !== 0) {
      return it + Math.abs((it % 5) - 5) - it < 3
        ? it + Math.abs((it % 5) - 5)
        : it;
    }
  });
}
console.log(gradingStudents([73, 67, 38, 33]));
