/*
    1. const fs = require("fs") //필수 모듈 로드
    2. directory 생성 : mkdir(폴더이름, 콜백)
    3. directory 제거 : rmdir(폴더이름,{force:true},콜백) 삭제 옵션이 필요 => 폴더 파일이 있으면 삭제 x
    4. file 생성 : fileWrite(파일이름, 쓸 내용, 콜백함수)
        - 파일이름은 상대경로(./) 보다는 절대경로(c,d,e,/)를 사용하는 걸 추천
        - 절대경로 : const path = require("path")
                    path.join() 을 이용해서 절대경로 설정
    5. file 제거 : unlink(삭제할 파일이름, 콜백)                    
    6. 파일 쓰기 : json 파일 생성한 후 + json 파일을 연결해서 다시 쓰기
                    spread operator + readFile();
    7. 중복 데이터 입력을 방지하기 위한 : Object.keys()

    I/O : 존재하는 지 확인 후 생성 if 예외 처리
        -if(fs.existsSync()) {mkdir,writeFile} 존재하는지 안하는지
*/
const fs = require("fs");
const path = require("path");
/*
//존재하지 않으면 생성
if (!fs.existsSync(path.join(__dirname, "files"))) {
  //I/O 무조건 예외처리(콜백)
  fs.mkdir(path.join(__dirname, "files"), (err) => {
    if (err) {
      throw err;
    }
  });
}
*/

/*
//file.txt 생성 : writeFile(파일이름, 쓸내용, 콜백함수)
if (!fs.existsSync("./files/file.txt")) {
  const message = "Busan it Academy";
  fs.writeFile(path.join(__dirname, "files", "file.txt"), message, (err) => {
    if (err) {
      throw err;
    }

    console.log("created file..");
  });
} else {
  console.log("failed : file existed..");
}
*/

//json directory
//jsObj file + jsObj write
//stringify()
if (!fs.existsSync("./json")) {
  fs.mkdir(path.join(__dirname, "json"), (err) => {
    if (err) {
      throw err;
    }
    console.log("json directory completed...");
  });
}

const users = [
  { id: 1, username: "Korea" },
  { id: 2, username: "Japan" },
  { id: 3, username: "China" },
];

if (!fs.existsSync("./json/jsObj.json")) {
  fs.writeFile("./json/jsObj.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      throw err;
    }
    console.log("jsObj.json created...");
  });
} else {
  console.log("failed : file existed..");
}
