//eamil.split("나눌단어") = > 배열
const eamil = "abcd@mail.com";
const result = eamil.split("@");
console.log(result);

//for(let 별명 of 객체)

for (let ar of result) {
  console.log(`Email : ${ar}`);
}

const str01 = "This is NodeJS and ReactJS"; //space를 기준으로 나누기
const result01 = str01.split(" ");
console.log(result01);

const result02 = str01.split(" ", 3);
//console.log(result02);

//객체명.forEach((별명)=> console.log())
//메소드 안에 메소드가 또 들어가는 것들(콜백)
result01.forEach((r) => {
  console.log(r);
});

//다중 split
//str.split(정규식) => ?,! 기준으로 나누는 split()

const str02 = "Hello? Hi! Thank you.";
const result03 = str02.split(/[!,?]/g);
console.log(result03);
