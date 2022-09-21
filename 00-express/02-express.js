// 라우터 사용

const express = require("express");
const app = express();
const usersRoute = require("./routes/usersRoute"); //내가 만든 것을 사용할때는 ./ 붙여야함 import 랑 비슷한듯함
const itemsRoute = require("./routes/itemsRoute");
//shopping : users, items => url

//app.use(공통경로, require변수명);  공통경로는 바꿀수도 있음  주소를 들어갈땐 공통경로 + 접속할 주소 /users/exlink
//요청을 하면 (추가적인 작업을 해주는 s/w) 서버에서 응답  : middleware
app.use("/users", usersRoute); // middleware (app.use(), app.set())

//items / 상품전체보기 , 수정, 삭제
app.use("/items", itemsRoute);

app.listen(3000);
