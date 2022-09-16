const fs = require("fs");
const path = require("path");

/* 파일 쓰기 */
/* 폴더 : mkdir(), rmdir() */
/* 파일 : writeFile(), unlink(), appendFile() */

/* 파일 만들기 */
//fs.writeFile(파일이름, 내용, 콜백);
//연속해서 실행 시키면 기존 내용을 덮어 씀
//appendFile 이어적기

let str = "HTML, CSS, NODEJS, REACTJS"; //파일에 쓸 내용
fs.writeFile("./file.txt", str, (err) => {
  if (err) {
    throw err;
  }
  console.log("파일이 생성되었습니다.");
});

//추가내용적기(이어적기)
let appendStr = "\nJava, Spring Framework, Mysql";
fs.appendFile("./file.txt", appendStr, (err) => {
  if (err) {
    throw err;
  }
  console.log("내용이 추가되었습니다.");
});

//fs.unlink(지울파일이름,콜백)
fs.unlink("./file.txt", (err) => {
  if (err) {
    throw err;
  }
  console.log("선택하신 파일이 삭제되었습니다.");
});
