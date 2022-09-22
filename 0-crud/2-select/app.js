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
  dateStrings: "date",
});

//db.connect();
db.connect((err) => {
  if (!err) {
    console.log("Mysql Success!");
  } else {
    console.log(err);
  }
});

//middle
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/assets/css"))); //접근권한 설정 css
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

//url
app.get("/userList", (req, res) => {
  let sql = "SELECT regID, username FROM register ORDER BY regID DESC";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    //console.log(result);
    res.render("userList", { result });
  });
});

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
    res.redirect("/userList");
  });
});

app.get("/delUser/:id", (req, res) => {
  //html form -> req.body.name 값
  // db pk -> req.params.id
  let sql = "DELETE FROM register WHERE regID = ?;";
  db.query(sql, [req.params.id], (err) => {
    if (err) {
      throw err;
    }
    console.log(req.params.id + "번 회원이 삭제되었습니다.");
    res.redirect("/userList");
  });
});

app.get("/upUser/:id", (req, res) => {
  let sql = "SELECT * FROM register WHERE regID = ?;";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      throw err;
    }
    res.render("upUser", { result });
  });
});

app.post("/upUser", (req, res) => {
  let sql =
    "UPDATE register SET username=?,passwd=?,regdate=now() WHERE regID =?;";
  const users = {
    id: req.body.regID,
    uname: req.body.username,
    pwd: req.body.passwd,
  };

  db.query(sql, [users.uname, users.pwd, users.id], (err) => {
    if (err) {
      throw err;
    }
    console.log(users.id + "번 회원이 수정되었습니다.");
    res.redirect("/userList");
  });
});

app.get("/userView/:id", (req, res) => {
  let veiwSQL = "SELECT * FROM register WHERE regID = ?;";
  db.query(veiwSQL, [req.params.id], (err, result) => {
    if (err) {
      throw err;
    }
    res.render("userView", { result });
  });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
