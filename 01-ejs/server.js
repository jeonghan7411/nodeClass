const { application } = require("express");
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
//app.use(express.static("경로")); 폴더 보안 해제
app.use(express.static(path.join(__dirname, "/views/css")));

let title = "Busan it Academy";

app.get("/", (req, res) => {
  res.render("index", { title, sub: " > Home" }); //key:value 이름이 같으면 한번만 사용
});

app.get("/addUser", (req, res) => {
  res.render("users", { title, sub: " > Add User" });
}); //form을 통한 사용자 저장하기

app.post("/addUser", (req, res) => {
  console.log(req.body.userid);
  console.log(req.body.passwd);
});

//내가 만든 url 제외한 전부
//url 부분 제일 마지막
app.get("*", (req, res) => {
  res.render("404", { title, sub: " > 404 Page" });
});

app.listen(3000, () => console.log("Server Running..."));
