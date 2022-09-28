const userid = document.getElementById("userid");
const userpwd = document.getElementById("userpwd");
const useremail = document.getElementById("useremail");
const username = document.getElementById("username");
const registInput = document.querySelector(".regist-input");
let count = 0;
function checkRegist() {
  if (userid.value === "" || userid.value.trim() === null) {
    errChk(userid, "아이디를 입력해주세요");
    return false;
  } else if (userid.value.trim().length < 8) {
    errChk(userid, "아이디는 8자리 이상 입력하셔야 합니다.");
    return false;
  } else {
    sucChk(userid);
    count++;
  }

  if (userpwd.value === "" || userpwd.value.trim() === null) {
    errChk(userpwd, "비밀번호를 입력해주세요");
    return false;
  } else if (userpwd.value.trim().length < 8) {
    errChk(userpwd, "비밀번호는 8자리 이상 입력하셔야 합니다.");
    return false;
  } else {
    sucChk(userpwd);
    count++;
  }

  if (username.value === "" || username.value.trim() === null) {
    errChk(username, "이름을 입력해주세요");
    return false;
  } else {
    sucChk(username);
    count++;
  }

  if (useremail.value === "" || useremail.value.trim() === null) {
    errChk(useremail, "이메일을 입력해주세요");
    return false;
  } else if (!isEmailCheck(useremail.value.trim())) {
    errChk(useremail, "이메일이 유효하지 않습니다.");
    return false;
  } else {
    sucChk(useremail);
    count++;
  }
}

function errChk(input, msg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.classList.add("err-input");
  small.innerHTML = msg;
}

function sucChk(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.classList.add("suc-input");
  small.innerHTML = "";
}

function isEmailCheck(email) {
  let exp = /^[a-z A-Z 0-9 + -\_.]+@[a-z A-Z 0-9]+\.[a-z A-Z 0-9]+$/;
  return exp.test(email);
}

document.getElementById("form").addEventListener("submit", (e) => {
  if (count < 4) {
    e.preventDefault();
    checkRegist();
  } else {
    checkRegist();
  }
});
