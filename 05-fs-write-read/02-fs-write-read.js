/* 
    1. Json파일 : 
    2. 절대경로 : 
    3. 디렉토리 생성 : 
    4. jsObject -> JsonObject -> fs.writeFile();
*/

const fs = require("fs");
const path = require("path");
const { stringify } = require("querystring");

if (!fs.existsSync(path.join(__dirname, "db"))) {
  fs.mkdir(path.join(__dirname, "db"), (err) => {
    if (err) {
      throw err;
    }
  });
}

/* JS -> JSON */

const users = [
  {
    id: 1,
    userid: "busanit",
    passwd: "12345",
    gender: "M",
    regdate: "2022-09-01",
  },

  {
    id: 2,
    userid: "daeguit",
    passwd: "12345",
    gender: "M",
    regdate: "2022-09-01",
  },

  {
    id: 3,
    userid: "seoulit",
    passwd: "12345",
    gender: "M",
    regdate: "2022-09-01",
  },
];
const result = JSON.stringify(users, null, 2);
//console.log(result);

fs.writeFile(path.join(__dirname, "db", "users.json"), result, (err) => {
  if (err) {
    throw err;
  }
  console.log("json file이 생성 되었습니다.");
});

const user = {
  id: 4,
  userid: "gwangjuit",
  passwd: "12345",
  gender: "M",
  regdate: "2022-09-01",
};

// fs.readFile(파일이름, 파일포맷, 콜백(err,data));
// text - > "utf8"
fs.readFile(path.join(__dirname, "db", "users.json"), "utf8", (err, data) => {
  if (err) {
    throw err;
  } else {
    //기존 자료 읽어오기
    const jsObj = JSON.parse(data); //프로그래밍 처리할 때는 parse

    //기존 + 새자료 = 기존 자료 메모리
    jsObj.push({ ...user }); //jsObj(기존자료).push
    //fs.writeFile(파일이름,자료,콜백);
    fs.writeFile("./db/users.json", JSON.stringify(jsObj, null, 2), (err) => {
      if (err) {
        throw err;
      }
      console.log("사용자가 추가 되었습니다.");
    });
  }
});
