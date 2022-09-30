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
  res.render("index", { title, sub: " > Main " });
});

router.get("/regist", (req, res) => {
  res.render("regist", { title, sub: " Member > Regist " });
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

router.get("/delUser/:idx", (req, res) => {
  let sql = "DELETE FROM member WHERE idx = ?;";
  db.query(sql, [req.params.idx], (err) => {
    if (err) {
      throw err;
    }
    res.redirect("/memlist");
  });
});

router.get("/memlist", (req, res) => {
  let sql =
    "SELECT idx,id,name,email,regdate FROM member ORDER BY idx DESC limit 10;";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.render("memberList", { result, title, sub: "Member > List " });
  });
});

router.get("/updateUser/:id", (req, res) => {
  let sql = "SELECT * FROM member WHERE idx = ?;";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.render("updateUser", { result, title, sub: " Member > Update" });
  });
});

router.post("/updateUser", (req, res) => {
  let sql = "UPDATE member SET pw=?,name=?,email=? WHERE id =?;";
  const users = {
    id: req.body.upid,
    pw: req.body.upPw,
    name: req.body.upName,
    email: req.body.upEmail,
  };
  db.query(sql, [users.pw, users.name, users.email, users.id], (err) => {
    if (err) {
      throw err;
    }
    res.redirect("/memlist");
  });
});

router.get("/userView/:idx", (req, res) => {
  let veiwSQL = "SELECT * FROM member WHERE idx = ?;";
  db.query(veiwSQL, [req.params.idx], (err, result) => {
    if (err) {
      throw err;
    }
    res.render("userView", { result, title, sub: " Member > View" });
  });
});

// router.get("/search", (req, res) => {
//   let sql = "SELECT * FROM member WHERE name regexp ?;";

//   db.query(sql, [req.query.searchInput], (err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.render("memberList", { result, title, sub: " Member > Search" });
//   });
// });

router.get("/search", (req, res) => {
  if (req.query.search == "name") {
    let sql =
      "SELECT idx,id,name,email,regdate FROM member WHERE name regexp ? ORDER BY idx DESC limit 10;";
    db.query(sql, [req.query.searchInput], (err, result) => {
      if (err) {
        throw err;
      }
      res.render("memberList", { result, title, sub: "memberSearch" });
    });
  } else if (req.query.search == "email") {
    let sql =
      "SELECT idx,id,name,email,regdate FROM member WHERE email regexp ? ORDER BY idx DESC limit 10;";
    db.query(sql, [req.query.searchInput], (err, result) => {
      if (err) {
        throw err;
      }
      res.render("memberList", { result, title, sub: "memberSearch" });
    });
  } else if (req.query.search == "regdate") {
    let sql =
      "SELECT idx,id,name,email,regdate FROM member WHERE regdate regexp ? ORDER BY idx DESC limit 10;";

    db.query(sql, [req.query.searchInput], (err, result) => {
      if (err) {
        throw err;
      }
      res.render("memberList", { result, title, sub: "memberSearch" });
    });
  }
});

module.exports = router;
