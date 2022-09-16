/*
    1. 객체 여러 개
        -for
        -spread operation ... = concat
        (회원1, 회원2) -> (회원1, 회원2, 회원3, 회원4 ....)
*/

const users = [
  { id: 1, userid: "busan it", gender: "M" },
  { id: 2, userid: "seoul it", gender: "M" },
  { id: 3, userid: "daegu it", gender: "M" },
];

// for (let i = 0; i < users.length; i++) {
//   console.log(
//     "ID : " +
//       users[i].id +
//       "  아이디 : " +
//       users[i].userid +
//       "  성별 : " +
//       users[i].gender
//   );
//   console.log(
//     `ID :${users[i].id} - 아이디 :${users[i].userid} - 성별 :${users[i].gender} `
//   );
// }

const user = [
  {
    id: 4,
    userid: "gwangjuit",
    gender: "F",
  },
  {
    id: 5,
    userid: "daegeonit",
    gender: "F",
  },
];

const user1 = {
  id: 6,
  userid: "incheonit",
  gender: "M",
};

const arr = []; //users + user

console.log("-----------------------------------------");
//객체또는 배열명 push 배열이나 객체 안에 삽입 (맨 끝)
//객체또는 배열명 pop 배열이나 객체 밖으로 빼낼 때 (맨 끝)
arr.push(...users, ...user, { ...user1 });
// ...users 할때 [],{}형식을 맞춰야하는데 형식이 다른것을 넣을떄는 {}로 감싸주면됨
//{...객체명} : 단일 객체를 추가할 때
console.log(arr.length);
console.log(arr);
