const passwordInput = document.querySelector("#passwordInput");
const toggleButton = document.querySelector("#toggleButton");


toggleButton.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "Hide Password";
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "Show Password";
  }
});