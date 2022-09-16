/*
    1. fs.readFile("읽어올 파일", 데이터포맷(utf-8), 콜백(err, 결과변수))
    2. txt,json
*/

const fs = require("fs");
const path = require("path");

/*
if (fs.existsSync("./files/file.txt")) {
  fs.readFile(
    path.join(__dirname, "files", "file.txt"),
    "utf-8",
    (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
    }
  );
} else {
  console.log("File Not Found");
}
*/

/*
if (fs.existsSync("./json/jsObj.json")) {
  fs.readFile(
    path.join(__dirname, "json", "jsObj.json"),
    "utf-8",
    (err, result) => {
      if (err) {
        throw err;
      }
      const jsObj = JSON.parse(result);
      console.log(jsObj);
    }
  );
} else {
  console.log("File Not Found");
}
*/

const addUsers = [
  { id: 4, username: "U.S.A" },
  { id: 5, username: "Spain" },
];

//json 파일에 추가 : [...기존자료 , ...새로운자료] = 기존자료 - spread operator
//fs.appendFile() 이어쓰기 메소드 => x  (텍스트 파일 연결할 때만 사용)
//writeFile()로 다시 덮어 쓰기

fs.readFile("./json/jsObj.json", "utf-8", (err, result) => {
  if (err) {
    throw err;
  }
  const jsObj = JSON.parse(result);
  //   console.log(jsObj);
  //   console.log(addUsers);
  const addResult = [...jsObj, ...addUsers];
  //console.log(addResult);
  //fs.writeFile(파일이름,내용,콜백)

  //const addUsers = { id: 6, username: "U.S.A" },
  //const addResult = [...jsObj, {...addUsers}];   {}로 쌓여져 있는 경우

  /* json 예외처리 */

  //객체 개수가 3개 보다 같거나 클때만 이어붙이고 아니면 이어붙이지 않기
  //Object.keys(객체명) : 파일에 배열 개수 확인
  //jsObj : json 파일에 쓴 내용
  const count = Object.keys(jsObj); // index number
  if (count.length <= 3) {
    fs.writeFile(
      "./json/jsObj.json",
      JSON.stringify(addResult, null, 2),
      (err) => {
        if (err) {
          throw err;
        }
        console.log("json file added....");
      }
    );
  } else {
    console.log("Data Added Fail...");
  }
  /* json 예외처리 */
});
