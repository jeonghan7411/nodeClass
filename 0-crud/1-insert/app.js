const express = require("express");
const path = require("path");
const mysql = require("mysql");

const app = express();
const PORT = 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "login",
  password: "1234",
  database: "login",
});

//db.connect();
db.connect((err) => {
  if (!err) {
    console.log("Mysql Success!");
  } else {
    console.log(err);
  }
});

//middleware
app.set("view engine", "ejs"); //ejs middleware -views 안에 있는 파일을 읽어 오기
app.use(express.urlencoded({ extended: false }));
//middleware

let title = "Member Management System";
app.get("/addUser", (req, res) => {
  res.render("insert", { title, subTitle: "> Insert" });
});

app.post("/addUser", (req, res) => {
  let sql = "INSERT INTO  register VALUES(NULL, ?,?,now());";
  // sql 문을 실행 (sql,[?값을 순서대로 넣어주면 됨 ?가 없으면 생략],콜백)
  //? 가 있으면 []
  db.query(sql, [req.body.username, req.body.passwd], (err) => {
    if (err) {
      throw err;
    }
    res.redirect("/list");
  });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
