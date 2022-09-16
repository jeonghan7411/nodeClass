/* db 또는 file 에 회원가입한 사용자가 저장되어 있다고 가정 */

const p1 = ["KIM", "LEE", "PARK", "CHOI"];
const c1 = ["RED", "GREEN", "BLUE"];
//module.exports.쓰고싶은이름(별명 보통 내보낼변수명이랑 똑같이 사용함) = 내보낼변수  해야 다른곳에서 자료를 사용할수 있음

/* module 1번 방법
module.exports.person = p1;
module.exports.color = c1;
*/

/* 
2번 방법
//한번에 처리하는 방법
module.exports = {
  person: p1,
  color: c1,
};
*/

//3번 방법
module.exports = {
  //변수 = 값 이름이 동일 하면 한번만 적어도 상관없음
  p1, //변수명 : 값
  c1, //변수명 : 값
};
