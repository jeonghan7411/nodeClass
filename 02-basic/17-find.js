const employees = [
  { id: 1, username: "KIM", salary: 200000 },
  { id: 2, username: "LEE", salary: 840000 },
  { id: 3, username: "PARK", salary: 650000 },
];

//수정 : UPDATE 테이블이름 SET 바꿀컬럼명1 = "값", 바꿀컬럼명2 = "값",... WHERE id = 바꿀pk;
//삭제 : DELETE FROM 테이블 이름 WHERE id = 삭제할pk;
//상세보기 : SELECT * FROM 테이블명 WHERE id = 상세보기할pk

//인덱스 번호로 찾기 : findIndex() : 숫자로 된 id를 이용하여 검색
const result3 = employees.findIndex((emp) => emp.id == 1);
console.log(result3);

//id 2번 사람의 정보를 삭제
const result = employees.find((emp) => emp.id == 2);
console.log(result);

const result1 = employees.filter((emp) => emp.id == 3);
console.log(result1);

const result2 = employees.find((emp) => {
  /*
  if (emp.username === "PARK") {
    return true;
  }
  */
  return emp.username == "PARK";
});

console.log(result2);
