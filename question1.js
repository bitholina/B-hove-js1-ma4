const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
let firstNameError = document.querySelector("#firstNameError");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const firstNameValue = firstName.value;
  const trimFirstNameValue = firstNameValue.trim();
  const firstNameValueLength = trimFirstNameValue.length;

  if (firstNameValueLength >= 2) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }
}
