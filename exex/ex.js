const fs = require("fs");
const path = require("path");

if (fs.existsSync("20220907")) {
  console.log("폴더가 존재합니다.");
} else {
  fs.mkdir("20220907", (err) => {
    if (err) {
      throw err;
    }
    console.log("20220907 폴더가 생성되었습니다.");
  });
}

let str = "Welcome Busan it Academy";
fs.writeFile(path.join(__dirname, "20220907.txt"), str, (err) => {
  if (err) {
    throw err;
  }
  console.log("파일이 생성되었습니다.");
});

let appendStr = "\nHello NodeJS";
fs.appendFile(path.join(__dirname, "20220907.txt"), appendStr, (err) => {
  if (err) {
    throw err;
  }
  console.log("내용이 추가되었습니다.");
});

if (fs.existsSync("20220907.txt")) {
  fs.unlink(path.join(__dirname, "20220907.txt"), (err) => {
    if (err) {
      throw err;
    }
    console.log("선택하신 파일이 삭제되었습니다.");
  });
} else {
  console.log("삭제할 파일이 없습니다.");
}

if (fs.existsSync("20220907")) {
  fs.rmdir("20220907", (err) => {
    if (err) {
      throw err;
    }
    console.log("20220907 디렉토리가 삭제되었습니다.");
  });
} else {
  console.log("삭제할 디렉토리가 존재하지 않습니다.");
}
