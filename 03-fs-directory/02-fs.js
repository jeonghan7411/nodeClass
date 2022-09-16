const fs = require("fs");

if (fs.existsSync("data")) {
  console.log("폴더가 존재합니다.");
} else {
  fs.mkdir("data", (err) => {
    if (err) {
      throw err;
    }
    console.log("data 폴더가 생성되었습니다.");
  });
}

/*
     디렉토리 삭제 fs.rmdir()
     -존재할 때 삭제 or 삭제할 디렉토리가 없습니다. 
 */

// 빈 디렉토리를 삭제할 때 (파일이 있는경우에는 삭제가 불가능)
// if (fs.existsSync("data")) {
//   fs.rmdir("data", (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("data 디렉토리가 삭제되었습니다.");
//   });
// } else {
//   console.log("삭제할 디렉토리가 존재하지 않습니다.");
// }

//첨부 파일업로드 -> 게시물 삭제 -> 업로드 폴더&파일 삭제

//디렉토리 안에 파일이 존재하면 강제로 폴더를 삭제
if (fs.existsSync("data")) {
  fs.rmdir("data", { recursive: true, force: true }, (err) => {
    //강제 삭제할 옵션
    if (err) {
      throw err;
    }
    console.log("data 디렉토리가 삭제되었습니다.");
  });
} else {
  console.log("삭제할 디렉토리가 존재하지 않습니다.");
}
