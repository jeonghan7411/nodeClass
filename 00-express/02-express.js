/*
    1. npm init -y
    2. express module

    3. require()
    4. port number 3000
    5. 주소설정후 html
*/
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome Busan it Website</h1>");
});

app.get("/getBoardList", (req, res) => {
  //console.log("test");
  res.sendFile(__dirname + "/getBoardList.html");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server Running PORT ${PORT}`));
