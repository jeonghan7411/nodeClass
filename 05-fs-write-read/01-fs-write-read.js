/* 
    ** fs모듈, path모듈 (설치x)
    1. 텍스트 파일 : fs.writeFile();
    2. 절대경로 : path.join()
    3. 디렉토리 생성 : fs.mkdir()
*/

const fs = require("fs");
const path = require("path");
/* directory 생성 -> 존재하면 건너 뜀 */

//existsSync 파일이 있는지 없는지 체크
if (!fs.existsSync("json")) {
  fs.mkdir(path.join(__dirname, "json"), (err) => {
    //file io => call back 함수 필요
    if (err) {
      throw err;
    }
    console.log("디렉토리 생성");
  });
}

let message = "2022-09-08 Login을 기록합니다...";
// fs.writeFile(path.join(__dirname, "json", "file.txt"), message, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("file.txt 생성 + 쓰기");
// });

/* readFile() : 글자를 정상적인 출력을 하기 위해서 toString(),utf8 */

/* 
    fs.readFile("파일이름",콜백(err,결과변수))

*/

fs.readFile(
  path.join(__dirname, "json", "file.text"),
  "utf8",
  (err, readData) => {
    //file io : err, 화면 출력할게 있으면 결봐 변수(이름은 임의로)
    if (err) {
      throw err;
    }
    //   console.log(readData.toString());
    console.log(readData);
  }
);

//fs.unlink(지울파일이름, 콜백)
fs.unlink("./json/file.text", (err) => {
  if (err) {
    throw err;
  }
  console.log("선택하신 파일이 삭제 되었습니다.");
});
