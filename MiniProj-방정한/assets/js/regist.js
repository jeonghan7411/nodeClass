const userid = document.getElementById("userid");
const userpwd = document.getElementById("userpwd");
const useremail = document.getElementById("useremail");
const username = document.getElementById("username");
const registInput = document.querySelector(".regist-input");
let idBool = false;
let pwBool = false;
let nameBool = false;
let emailBool = false;

const checked = document.getElementById("checkbox");
function checkRegist() {
  if (userid.value === "" || userid.value.trim() === null) {
    errChk(userid, "아이디를 입력해주세요");
    userid.focus();
    return false;
  } else if (userid.value.trim().length < 8) {
    errChk(userid, "아이디는 8자리 이상 입력하셔야 합니다.");
    userid.focus();
    return false;
  } else {
    sucChk(userid);
    idBool = true;
  }

  if (userpwd.value === "" || userpwd.value.trim() === null) {
    errChk(userpwd, "비밀번호를 입력해주세요");
    userpwd.focus();
    return false;
  } else if (userpwd.value.trim().length < 8) {
    errChk(userpwd, "비밀번호는 8자리 이상 입력하셔야 합니다.");
    userpwd.focus();
    return false;
  } else {
    sucChk(userpwd);
    pwBool = true;
  }

  if (username.value === "" || username.value.trim() === null) {
    errChk(username, "이름을 입력해주세요");
    username.focus();
    return false;
  } else {
    sucChk(username);
    nameBool = true;
  }

  if (useremail.value === "" || useremail.value.trim() === null) {
    errChk(useremail, "이메일을 입력해주세요");
    useremail.focus();
    return false;
  } else if (!isEmailCheck(useremail.value.trim())) {
    errChk(useremail, "이메일이 유효하지 않습니다.");
    useremail.focus();
    return false;
  } else {
    sucChk(useremail);
    emailBool = true;
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
  if (
    idBool == false ||
    pwBool == false ||
    emailBool == false ||
    nameBool == false
  ) {
    e.preventDefault();
    checkRegist();
  } else {
    checkRegist();
  }
});
