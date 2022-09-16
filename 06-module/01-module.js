/* 
    1. 파일을 사용하기 쉽게 쪼개서 사용
    
    -custom 모듈을 사용하는 이유는 파일관리를 쉽게 하기 위해서 또는
    파일 공유를 하기 위해서
*/

/* 
    module => 객체 , interface
    메인은 일반적으로 기본적인 코드만 두고 실행
*/

/* 
1번 방법
const u = require("./users");
console.log(u.person);
console.log(u.color);
*/

/* 
2번 방법
const { person, color } = require("./users");
console.log(person);
console.log(color);
*/

/*
3번 방법
const u = require("./users");
console.log(u.c1);
console.log(u.p1);
*/

const { p1, c1 } = require("./users");
console.log(p1);
console.log(c1);
