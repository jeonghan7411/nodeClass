/* 
    Node 서버
    0. npm init -y : 모듈 관리 파일
    1. 필요한 모듈 설치 : npmjs.com  검색 > 설치
    2. Server URI : http://localhost:3000/임의로 작업 : 브라우저로 접속하는 방법
        - protocol : http://, https://
        - domain : 도메인 구입 후 설정 = 그냥 사용 localhost(127.0.0.1)

        Node로 작업해야 하는 것들
        - port number : 나만이 유일하게 사용할 수 있는 통로 (3000NodeJs,5000 ReactJs)
            - 8080 (spring용) , mysql 3306
        - url : get(주소로 접근), post(숨겨서 전송해야 하는 것)
            - method ="post" 를 제외하면 전부 get 임.


    const express = require("express")

    url 설정 (주소 설정)

    port 번호 설정
    -> npmjs.com 검색하면 사용방법이 간략하게 나옴.
*/

//모듈 설정
const express = require("express");
const app = express();

//주소설정 (html 설정)
//서버는 기본적으로 요청(req), 응답(res) 기본 콜백
//app.get(); //app.get(내가 필요한 주소, 콜백함수(req,res)=>)
app.get("/getUsers", (req, res) => {
  //회원 전체 출력
  const sql = "SELECT * FROM users ORDER BY id DESC";
  res.send("All Users Query => " + sql);
  //   res.json({
  //     id: 1,
  //     userid: "busna",
  //     passwd: "12345",
  //   }); //{key : value} json형식으로 맞춰줘야함
});

app.get("/setUser", (req, res) => {
  //회원가입 한명
  const sql = "INSERT INTO users VALUES()";
  res.send(`User Query => ${sql}`);
});

app.get("/deleteUser/1", (req, res) => {
  //1번 pk 회원을 삭제
  const sql = "DELETE FROM users WHERE id = 1 ";
});

app.get("/updateUser/3", (req, res) => {
  //3번 pk 회원을 업데이트
  const sql = "UPDATE users SET username =? WHERE id = 3";
});
//포트설정
app.listen(5000, () => console.log("Server Running")); //port 번호가 정상적으로 동작하는 지를 나타내는게 listen
