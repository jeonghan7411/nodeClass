/* jsObject */
const user = {
  id: 1,
  userid: "KIM",
  location: "Busan",
  grade: "4",
  hobby: {
    reading: true,
    sports: "Baseball",
  },
  lecture: ["HTML", "CSS", "NodeJS"],
};

console.log(user.id);
console.log(user.userid);
console.log(user.hobby);
console.log(user.hobby.reading);
console.log(user.hobby.sports);
console.log(user.lecture[1]);
console.log(user["location"]);
console.log("----------------------------------");

// /* 전송한다  가정하고 (Server <-> Client)... stringify() */
// const jsonObj = JSON.stringify(user, null, 2);
// console.log(jsonObj);
// /* 수신한다  가정하고 ... parse() */
// console.log(JSON.parse(jsonObj)); // json -> js(사용)

/* 원하는거 하나만 뽑을 때 (참고용 잘 사용하진 않음)
const jsonObjOne = JSON.stringify(user, ["userid"]);
console.log(jsonObjOne);

const jsonObjTwo = JSON.stringify(user, ["grade"]);
console.log(jsonObjTwo);
*/

//json 타입으로 변환한 후에
//사용자의 지역(location)이 Busan이면 값을 출력하고 아니면 "Not Found"
// 콘솔에 출력하시오
// ?(=if) 분기문을 사용하시오

//JSON.stringify((객체명, 콜백() => {});
//json 변환한 후 - > 객체를 key, value 로 분리
// const result = JSON.stringify(user, (key, value) => {
//   return user.location == "Busan" ? value : "Not Found";
// });
// console.log(result);

//통신할 때는 stringify -> 사용할때는 parse() 로 변환해서 사용
/*
const result = JSON.stringify(user);
if (JSON.parse(result).location === "Busan") {
  console.log(result);
} else {
  console.log("Not Found");
}
*/

//삼항연산자 = 짧은 if
const num1 = 10;
const num2 = 5;
const arr = [1, 2, 3, 4, 5];

// num1 이  num2 보다 크면 "num1이 더 큽니다" 라는 메시지 출력
// 결과를 담는 변수 생성

//const result = num1 > num2 ? 참 : 거짓;
const result = num1 > num2 ? "num1" : "num2";
console.log(`${result}이 더 큽니다.`);

// 결과를 담는 변수 생성 x
// 배열 안에 값이 있으면 내용을 출력하고 없으면 "배열이 비어 있습니다." 출력
//length > 0
arr.length > 0 ? console.log("참") : console.log("배열이 비어 있습니다.");
