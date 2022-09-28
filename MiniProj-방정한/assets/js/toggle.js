const toggle = document.querySelector("#toggle");
const linkWrap = document.querySelector("#link-wrap");

toggle.addEventListener("click", () => {
  linkWrap.classList.toggle("show-link");
});
