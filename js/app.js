const button = document.querySelector(".hamburgerIcon");
const link = document.querySelector(".link");

button.addEventListener("click", () => {
  link.classList.toggle("navlink");
});
