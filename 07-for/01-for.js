/* 
    1. for - of : java 향상된 for
    2. forEach : 많이 사용함
*/

/*
for (let 별명 of 객체명) {  
  console.log(별명);
}
*/

const colors = ["RED", "GREEN", "BLUE"];
for (let elment of colors) {
  console.log(elment);
}

/*
    객체명.forEach((별명) => {
        console.log(별명);
    });
*/

console.log("----------------------------------");

colors.forEach((el) => {
  console.log(el);
});

console.log("----------------------------------");
const str = "KOREA";
for (let s of str) {
  console.log(s);
}

console.log("----------------------------------");
const jsObj = [
  { id: 1, username: "KOREA" },
  { id: 2, username: "U.S.A" },
  { id: 3, username: "U.K" },
];

for (let obj of jsObj) {
  console.log(obj);
}
console.log("----------------------------------");

jsObj.forEach((o) => {
  console.log(o);
});
