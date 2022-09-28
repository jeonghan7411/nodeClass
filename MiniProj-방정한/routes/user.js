const { application } = require("express");
const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "Grpware",
  password: "Grpware",
  database: "minipro",
  dateStrings: "yyyy-mm-dd",
});

let title = "Bit Groupware";

router.get("/", (req, res) => {
  res.render("index", { title, sub: " > Home " });
});

router.get("/regist", (req, res) => {
  res.render("regist", { title, sub: " > Regist " });
});

router.post("/regist", (req, res) => {
  let sql = "INSERT INTO  member VALUES(NULL,?,?,?,?,now());";
  db.query(
    sql,
    [req.body.userid, req.body.userpwd, req.body.username, req.body.useremail],
    (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/");
    }
  );
});

router.get("/memlist", (req, res) => {
  let sql =
    "SELECT idx,id,name,email,regdate FROM member ORDER BY idx DESC limit 10;";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.render("memberList", { result, title, sub: " > MemberList" });
  });
});

// app.get("/upUser/:id", (req, res) => {
//   let sql = "SELECT * FROM MEMBER WHERE id = ?";
//   db.query(sql, [req.params.id], (err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.render("upUser", { result, title, sub: " > UpdateUser" });
//   });
// });

module.exports = router;
