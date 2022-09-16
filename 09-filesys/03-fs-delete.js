/*
    unlink : file delete
    rmdir() : directory
*/

// 파일 삭제후  폴더가 비어지면 폴더 삭제 *****
// files 폴더를 강제 지우기
// 처음은 옵션 없이 삭제
// 옵션으로 강제 삭제

const fs = require("fs");

if (fs.existsSync("./json/jsObj.json")) {
  fs.unlink("./json/jsObj.json", (err) => {
    if (err) {
      throw err;
    } else {
      console.log("jsObj.json 파일이 삭제 되었습니다.");
      if (fs.existsSync("./json")) {
        fs.rmdir("./json", (err) => {
          if (err) {
            throw err;
          }
          console.log("폴더가 삭제 되었습니다.");
        });
      } else {
        console.log("삭제할 폴더가 없습니다.");
      }
    }
  });
}

/*   폴더 삭제 (옵션 없이 강제삭제 x)
if (fs.existsSync("./files")) {
  fs.rmdir("./files", (err) => {
    if (err) {
      throw err;
    }
  });
} else {
  console.log("삭제할 폴더가 없습니다.");
}
*/

/*
//폴더 삭제 (옵션으로 강제 삭제) 사용안하는게 좋음
const fs = require("fs");
if (fs.existsSync("./files")) {
  fs.rmdir("./files", { recursive: true, force: true }, (err) => {
    if (err) {
      throw err;
    }
  });
} else {
  console.log("삭제할 폴더가 없습니다.");
}

*/
