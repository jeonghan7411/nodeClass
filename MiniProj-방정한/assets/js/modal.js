const loginModal = document.querySelector(".loginModal");
const updatemodal = document.querySelectorAll("#updateBtn");
const backGround = document.querySelector(".backGround");
const closeBtn = document.getElementById("closemodal");

const updatepw = document.getElementById("updatepw");
const updatename = document.getElementById("updatename");
const updateemail = document.getElementById("updateemail");

let pwBool = false;
let nameBool = false;
let emailBool = false;

for (let i = 0; i < updatemodal.length; i++) {
  updatemodal[i].addEventListener("click", function () {
    loginModal.classList.add("show-modal");
    backGround.classList.add("show-modal");
    document.querySelector("body").classList.add("scrock");
  });
}

function restInput() {
  updatepw.value = "";
  updatename.value = "";
  updateemail.value = "";
}

closeBtn.addEventListener("click", () => {
  loginModal.classList.remove("show-modal");
  backGround.classList.remove("show-modal");
  document.querySelector("body").classList.remove("scrock");
  restInput();
});

function checkRegist() {
  if (updatepw.value === "" || updatepw.value.trim() === null) {
    errChk(updatepw, "비밀번호를 입력해주세요");
    updatepw.focus();
    return false;
  } else if (updatepw.value.trim().length < 8) {
    errChk(updatepw, "비밀번호는 8자리 이상 입력하셔야 합니다.");
    updatepw.focus();
    return false;
  } else {
    sucChk(updatepw);
    pwBool = true;
  }

  if (updatename.value === "" || updatename.value.trim() === null) {
    errChk(updatename, "이름을 입력해주세요");
    updatename.focus();
    return false;
  } else {
    sucChk(updatename);
    nameBool = true;
  }

  if (updateemail.value === "" || userupdateemailemail.value.trim() === null) {
    errChk(updateemail, "이메일을 입력해주세요");
    updateemail.focus();
    return false;
  } else if (!isEmailCheck(updateemail.value.trim())) {
    errChk(updateemail, "이메일이 유효하지 않습니다.");
    updateemail.focus();
    return false;
  } else {
    sucChk(updateemail);
    emailBool = true;
  }
}

function isEmailCheck(email) {
  let exp = /^[a-z A-Z 0-9 + -\_.]+@[a-z A-Z 0-9]+\.[a-z A-Z 0-9]+$/;
  return exp.test(email);
}

function errChk(input, msg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.classList.add("modal-err-input");
  small.innerHTML = msg;
}

function sucChk(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.classList.add("modal-suc-input");
  small.innerHTML = "";
}

document.getElementById("refreshbtn").addEventListener("click", () => {
  restInput();
});

document.getElementById("updateform").addEventListener("submit", (e) => {
  if (pwBool == false || emailBool == false || nameBool == false) {
    e.preventDefault();
    checkRegist();
  } else {
    checkRegist();
  }
});
