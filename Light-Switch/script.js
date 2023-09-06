let dark = false;
const button = document.querySelector("button");
button.addEventListener("click", function (e) {
  dark = !dark;
  if (dark) {
    document.body.classList.add("body--dark");
    button.classList.add("button-dark");
    document.title = "Good Night";
  } else {
    document.body.classList.remove("body--dark");
    button.classList.remove("button-dark");
    document.title = "Good Morning";
  }
});
