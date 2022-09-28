const backDrop = document.querySelector(".backDrop");
const loginModal = document.querySelector(".loginModal");

const closeBtn = document.getElementById("closeBtn");
const updateBtn = document.getElementById("updateBtn");

const toggleBackDrop = () => {
  backDrop.classList.toggle("visible");
};

const showLoginModal = () => {
  alert("dd");
  loginModal.classList.remove("invisible");
  toggleBackDrop();
};

const closeLoginModal = () => {
  loginModal.classList.add("invisible");
  toggleBackDrop();
};

backDrop.addEventListener("click", closeLoginModal);
updateBtn.addEventListener("click", showLoginModal);
// closeBtn.addEventListener("click", closeLoginModal);
