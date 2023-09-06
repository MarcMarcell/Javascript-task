const fastCheck = document.querySelector("#fast");
const cheapCheck = document.querySelector("#cheap");
const goodCheck = document.querySelector("#good");
lastCheckbox = null;

function handleCheckboxChange(checkbox, checkbox1, checkbox2) {
  if (checkbox.checked && checkbox1.checked && checkbox2.checked) {
    lastCheckbox.checked = false;
  }
  lastCheckbox = checkbox;
}

fastCheck.addEventListener("change", () => {
  handleCheckboxChange(fastCheck, cheapCheck, goodCheck);
});

cheapCheck.addEventListener("change", () => {
  handleCheckboxChange(cheapCheck, fastCheck, goodCheck);
});

goodCheck.addEventListener("change", () => {
  handleCheckboxChange(goodCheck, fastCheck, cheapCheck);
});
