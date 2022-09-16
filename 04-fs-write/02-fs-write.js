/* 
    1. Log(방문기록)... : 날짜로 파일이름  
        - 하루 한번 : 년월일
        - 자주 기록 : gettime(); 1/1000초 기록
    
*/

/* 폴더생성 */
const fs = require("fs");
const path = require("path");

// new Date() : 년월일
// 가공 : getFullYear(), getMonth(), getDay()메소드
// fs.mkdir(파일이름,콜백);

let yy = new Date().getFullYear();
let mm = new Date().getMonth() + 1;
if (mm < 10) {
  mm = "0" + mm;
}
let dd = new Date().getDate();
if (dd < 10) {
  dd = "0" + dd;
}
let yymmdd = `${yy}${mm}${dd}`;
// fs.mkdir(yymmdd, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log(yymmdd + "폴더가 생성되었습니다.");
// });

/* 파일 생성 : 시간  */
function UNIX_TIMESTAMP() {
  //  1/1000초 단위로 변환
  return Math.floor(new Date().getTime()); //혹시나 소수점이 나오면 버림
}

//console.log(UNIX_TIMESTAMP());

let str = "Login information write...";

//fs.writeFile(절대경로(추가할 폴더이름,파일이름),내용,콜백){}

fs.writeFile(
  path.join(__dirname, yymmdd, UNIX_TIMESTAMP() + ".txt"), //yymmdd 는 들어갈 폴더명
  str,
  (err) => {
    if (err) {
      throw err;
    }
    console.log(UNIX_TIMESTAMP() + "파일 생성 완료");
  }
);
