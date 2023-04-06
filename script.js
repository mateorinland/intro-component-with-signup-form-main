const freeTrialForm = document.querySelector(".free-trial-form");
const firstNameInput = document.querySelector(".first-name-input");
const lastNameInput = document.querySelector(".last-name-input");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const submitButton = document.querySelector(".submit-button");

freeTrialForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

submitButton.addEventListener("click", function () {
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePassword();
});

function validateFirstName() {
  const firstNameErrorMessage = document.getElementById(
    "firstNameErrorMessage"
  );
  const firstNameErrorIcon = document.getElementById("firstNameErrorIcon");

  if (firstNameInput.value.length === 0) {
    firstNameErrorMessage.style.display = "inline";
    firstNameErrorMessage.textContent = "First name cannot be empty";
    firstNameErrorIcon.style.display = "inline";
    firstNameInput.style.border = "2px solid red";
  } else {
    firstNameInput.style.border = "2px solid green";
  }
}

function validateLastName() {
  const lastNameErrorMessage = document.getElementById("lastNameErrorMessage");
  const lastNameErrorIcon = document.getElementById("lastNameErrorIcon");

  if (lastNameInput.value.length === 0) {
    lastNameErrorMessage.style.display = "inline";
    lastNameErrorMessage.textContent = "Last name cannot be empty";
    lastNameErrorIcon.style.display = "inline";
    lastNameInput.style.border = "2px solid red";
  } else {
    lastNameInput.style.border = "2px solid green";
  }
}

function validateEmail() {
  const emailErrorMessage = document.getElementById("emailErrorMessage");
  const emailErrorIcon = document.getElementById("emailErrorIcon");
  const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (emailInput.value.length === 0) {
    emailErrorMessage.style.display = "inline";
    emailErrorMessage.textContent = "Email cannot be empty";
    emailErrorIcon.style.display = "inline";
    emailInput.style.border = "2px solid red";
  } else if (!emailInput.value.match(emailValidation)) {
    emailErrorMessage.style.display = "inline";
    emailErrorMessage.textContent = "Looks like this is not an email";
    emailErrorIcon.style.display = "inline";
    emailInput.style.border = "2px solid red";
  } else {
    emailInput.style.border = "2px solid green";
  }
}

function validatePassword() {
  const passwordErrorMessage = document.getElementById("passwordErrorMessage");
  const passwordErrorIcon = document.getElementById("passwordErrorIcon");

  if (passwordInput.value.length === 0) {
    passwordErrorMessage.style.display = "inline";
    passwordErrorMessage.textContent = "Password cannot be empty";
    passwordErrorIcon.style.display = "inline";
    passwordInput.style.border = "2px solid red";
  } else {
    passwordInput.style.border = "2px solid green";
  }
}
