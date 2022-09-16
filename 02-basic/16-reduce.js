const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //합계
/* 
객체명.reduce((이전값, 이후값) => {
    return 이전값 + 이후값;
}, 초기값);
*/

/*
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
*/

const result = numbers.reduce((prev, next) => {
  return prev + next;
}, 0);

console.log(result);

//사원급여의 합을 출력하시오.
const employees = [
  { username: "KIM", salary: 200000 },
  { username: "LEE", salary: 840000 },
  { username: "PARK", salary: 650000 },
];

const result2 = employees.reduce((total, empSalary) => {
  return total + empSalary.salary;
}, 0);

console.log(result2);
