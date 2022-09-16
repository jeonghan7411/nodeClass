/*
    
1.정규식(reExp) : regExp  Regular Expression
    - 필요한 내용이나 단어를 검색해서 수정/삭제 처리
	- 이메일 주소 형식 체크
	- 불필요한 특수문자를 삭제
	- 전화번호 : 3-4(3)-4

2.정규식 사용
	-/검색어/옵션


3.화면 출력
	정규식.test(검색할 내용)


*/

/* 정규식 사용 방법 */
const str = "This is NodeJS"; //이메일, 전화번호, 우편번호 : 형식에 맞는지 체크

//검색어 설정
const regEx01 = /nodejs/;

//검색 : 검색어.test(str);  - console.log();   return 값은 true, false : 영어 대소문자 구분
console.log(regEx01.test(str));

console.log("");

/* g 옵션 : 문장 전체, i 대소문자 구분 없이 */
const regEx02 = /nodejs/gi;
console.log(regEx02.test(str));

console.log("");

/* 
    Server Node
    - Mysql에 INSERT INTO 테이블명 VALUES(); 자료등록
    - 웹주소를 이용해서 삭제해야 되는 경우
    - id int not null
        http://localhost:5000/delete/

        SELECT * FROM 테이블명 WHERE id = pk;
        http://localhost:5000/user/1
        
*/

const str01 = "NodeJs";
//const regEx03 = /[0-9]/; 숫자 인지 확인
const regEx03 = /[^0-9]/; //  숫자가 아닌가?  =  글자입니까
console.log(regEx03.test(str01));

console.log("");

/* white space(공백) 체크 */
const str02 = "1 ";
const regEx04 = /\s/; //공백체크 : \s      \가 없다면 글자로 취급당하기 때문에 꼭 넣어야함.
console.log(regEx04.test(str02));

console.log("");
/* 시작을 체크하는 ^, 마지막 내용을 체크하는 $ */
const str03 = "01012345678";
//숫자로 시작하고 숫자로 끝나는 검색어 체크
const regEx05 = /^[0-9]+$/; // +$ 여러개의 숫자로 끝납니다.
console.log(regEx05.test(str03));

console.log("");
//전화번호 : 집전화(02.. 두자리 일 경우도 있음 051..), 휴대전화(010)
//숫자로 되어 있는지 확인 방법은 \d{2,3} <2자리,3자리 둘다 가능
//지역번호(통신사) : 2,3 => /^\d{2,3}/
//3,4 => /\d{3,4}/    중간자리 이기때문에 ^ 시작하는 체크가 필요없음
// 4 => /\d{4}$/
const str04 = "010-1234-5678";
const regEx06 = /^\d{2,3}-\d{3,4}-\d{4}$/;
console.log(regEx06.test(str04));

/* 주민번호 */
//6-7
//8번쨰 자리 : 1,2,3,4 중 하나
const str05 = "001234-3231231";
const regEx07 = /\d{6}-[1-4]\d{6}$/;
console.log(regEx07.test(str05));

console.log("");
/* 우편번호 5자리 : 3-2*/
const str06 = "123-23";
const regEx08 = /\d{3}-\d{2}/;
console.log(regEx08.test(str06));

/* 이메일 :  기본 타입 @ 체크  : indexof('@', str07) 이런 방법도 있긴함*/
const str07 = "busanit@busanit.cd.kr";
const regEx09 = /@/g;
console.log(regEx09.test(str07));

console.log("");
/* 이메일 실제 정규식 */
//계정(시작 숫자,글자) @ 도메인(.com .co.kr)
//111.com  aaa.com  aa.co.kr  이싿고 가정
const regEx10 =
  /^[0-9a-zA-Z]+@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])+\.[a-zA-Z]{2,3}$/;
console.log(regEx10.test(str07));

/*
    정규식(체크) -> 다시 입력, 불필요한 내용 바꾸거나 삭제
    trim, replace    
*/
