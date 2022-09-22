const express = require("express");
const mysql = require("mysql");
const app = express();

// mysql db connect : mysql.createConnection()
//db : 연결되면 true, false
const db = mysql.createConnection({
  host: "localhost",
  user: "login",
  password: "1234",
  database: "login",
});

//예외 처리
if (
  db.connect((err) => {
    if (!err) {
      console.log("Database Connection Success.");
    } else {
      console.log(err);
    }
  })
)
  // mysql db connect

  //ejs 파일 (html)을 쓰기 위한 세팅
  app.set("view engine", "ejs");
//////////////////////////////////

app.get("/", (req, res) => {
  // 버튼 보여주기 위한 url
  res.render("create");
});

///클릭했을 때 실행하는 url/////
app.get("/createTB", (req, res) => {
  let sql = "CREATE TABLE login(userid varchar(30),passwd varchar(20));";
  //실행 시키는 방법 : db.query(변수명,콜백)
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    console.log("테이블 생성 완료");
    res.redirect("/"); //localhost:3000 으로 이동
  });
});

app.get("/dropTB", (req, res) => {
  let sql = "DROP TABLE login";
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    console.log("테이블 삭제 완료");
    res.redirect("/");
  });
});

//////////////

app.get("/selectAll", (req, res) => {
  let sql = "SELECT * FROM login ORDER BY userid DESC";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.render("list", { result });
  });
});

app.listen(3000, () => console.log("Server Running...."));
