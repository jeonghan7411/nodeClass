const express = require("express");
const mysql = require("mysql");

const router = express.Router();

router.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "Grpware",
  password: "Grpware",
  database: "minipro",
  dateStrings: "yyyy-mm-dd",
});

router.get("/checkid", (req, res) => {
  res.render("ajax01");
});

router.post("/checkid", (req, res) => {
  let sql = "SELECT * FROM member WHERE id = ?;";
  let msg = "";
  console.log(req.query.userid);
  db.query(sql, [req.query.userid], (err, result) => {
    if (err) {
      throw err;
    }

    res.send({ result });
    // if (result === undefined) {
    //   res.render("ajax01", { result });
    //   alert(result);
    // } else {
    //   checkid.tf = false;
    //   res.send(msg);
    //   msg = "No";
    //   console.log(result[1] + "같다");
    // }

    // console.log(result);
    // res.render("ajax01", { result });

    // let msg = "";
    // if (users.userid == req.body.userid) {
    //   msg = "No";
    // }
    // res.send(msg); // server -> ajax => 결과값을 전송
  });
});

module.exports = router;
