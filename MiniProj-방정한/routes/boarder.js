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

let title = "Bit Groupware > Board";

router.get("/boardList", (req, res) => {
  let sql = "SELECT * FROM board ORDER BY idx DESC limit 10;";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.render("boardList", { result, title, sub: " > List " });
  });
});

router.get("/write", (req, res) => {
  res.render("write", { title, sub: " > Write " });
});

router.post("/write", (req, res) => {
  let sql = "INSERT INTO  board VALUES(NULL,?,?,?,now());";
  db.query(
    sql,
    [req.body.writer, req.body.writetitle, req.body.writecontent],
    (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/boardList");
    }
  );
});

router.get("/delBoard/:idx", (req, res) => {
  let sql = "DELETE FROM board WHERE idx = ?;";
  db.query(sql, [req.params.idx], (err) => {
    if (err) {
      throw err;
    }
    res.redirect("/boardList");
  });
});

router.get("/updateBoard/:id", (req, res) => {
  let sql = "SELECT * FROM board WHERE idx = ?;";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.render("updateboard", { result, title, sub: " > Update" });
  });
});

router.post("/updateBoard", (req, res) => {
  let sql = "UPDATE board SET title=?,content=? WHERE writer =?;";

  const board = {
    idx: req.body.idx,
    title: req.body.uptitle,
    writer: req.body.upwriter,
    content: req.body.upcontent,
  };
  db.query(sql, [board.title, board.content, board.writer], (err) => {
    if (err) {
      throw err;
    }
    res.redirect("/boardList");
  });
});

router.get("/boardView/:idx", (req, res) => {
  let veiwSQL = "SELECT * FROM board WHERE idx = ?;";
  db.query(veiwSQL, [req.params.idx], (err, result) => {
    if (err) {
      throw err;
    }
    res.render("contentView", { result, title, sub: " > View" });
  });
});

router.get("/searchboard", (req, res) => {
  if (req.query.searchboard == "title") {
    console.log(req.query.searchboard);
    let sql =
      "SELECT idx,writer,title,content,regdate FROM board WHERE title regexp ? ORDER BY idx DESC limit 10;";
    db.query(sql, [req.query.boardSearchInput], (err, result) => {
      if (err) {
        throw err;
      }
      res.render("boardList", { result, title, sub: "boardSearch" });
    });
  } else if (req.query.searchboard == "content") {
    console.log(req.query.searchboard);
    let sql =
      "SELECT idx,writer,title,content,regdate FROM board WHERE content regexp ? ORDER BY idx DESC limit 10;";
    db.query(sql, [req.query.boardSearchInput], (err, result) => {
      if (err) {
        throw err;
      }
      res.render("boardList", { result, title, sub: "boardSearch" });
    });
  } else if (req.query.searchboard == "writer") {
    console.log(req.query.searchboard);
    let sql =
      "SELECT idx,writer,title,content,regdate FROM board WHERE writer regexp ? ORDER BY idx DESC limit 10;";
    db.query(sql, [req.query.boardSearchInput], (err, result) => {
      if (err) {
        throw err;
      }
      res.render("boardList", { result, title, sub: "boardSearch" });
    });
  } else if (req.query.searchboard == "regdate") {
    console.log(req.query.searchboard);
    let sql =
      "SELECT idx,writer,title,content,regdate FROM board WHERE regdate regexp ? ORDER BY idx DESC limit 10;";
    db.query(sql, [req.query.boardSearchInput], (err, result) => {
      if (err) {
        throw err;
      }
      res.render("boardList", { result, title, sub: "boardSearch" });
    });
  }
});
module.exports = router;
