const express = require("express");
const app = express();

//url 설정 : method="post" 보이지 않으면 app.get();
//app.get("/", 콜백(req, res));
//http://localhost:3000 : 사용자 보여지게 만드는 것
//http://localhost:3000/users : 사용자 보여지게 만드는 것
//url 설정

//web : request(내가), response(서버 결과)
app.get("/", (req, res) => {
  console.log("Coomand NodeJS"); //콘솔에서 확인
  res.send("Welcome NodeJS "); //브라우저에서 확인
}); //localhost3000

app.get("/users", (req, res) => {
  res.send("<h1>Busan it Acadey</h1>");
});

app.get("/json", (req, res) => {
  res.send({ userid: "busanit" });
});

//app.listen(3000, 콜백)
//http://localhost:3000; : 사용자 보여지게 만드는 것
app.listen(3000, () => console.log("Server Running 3000..."));
