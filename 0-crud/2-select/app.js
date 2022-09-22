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

//url
app.get("/userList", (req, res) => {
  let sql = "SELECT * FROM register ORDER BY regID DESC";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    //console.log(result);
    res.render("userList", { result });
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
  let sql =
    "UPDATE register SET username='?', passwd ='?',regdate=now() WHERE regID = ?;";
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
