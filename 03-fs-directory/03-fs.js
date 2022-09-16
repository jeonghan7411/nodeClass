const fs = require("fs");
const path = require("path"); //path.join() 사용하기 위해서 필요

//__dirname : 절대 경로 디렉토리
//path.join(); 연결하는 메소드
//path.join(__dirname, "files"); // 절대경로+ 디렉토리 + files 폴더를 합치는 작업

//상대경로
fs.mkdir("files", (err) => {
  if (err) {
    throw err;
  }
  console.log("folder completed");
});

//절대경로
fs.mkdir(path.join(__dirname, "files2"), (err) => {
  if (err) {
    throw err;
  }
  console.log("folder completed..");
});

fs.rmdir(
  path.join(__dirname, "files2"),
  { recursive: true, force: true },
  (err) => {
    if (err) {
      throw err;
    }
    console.log("폴더가 삭제되었습니다.");
  }
);
