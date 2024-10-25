import "./floating-input-text.js";

let form = document.querySelector("form");

let inputEmail = document.querySelector(".email-input");
let emailText = document.querySelector(".email-text span");

let inputPass = document.querySelector(".password-input");
let passText = document.querySelector(".password-text span");

let inputUser = document.querySelector(".userName-input");
let userText = document.querySelector(".userName-text span");

inputUser.addEventListener("keyup", () => {
  let inputUserValue = inputUser.value;
  let regearExUser = /^[a-z]+\s[a-z]+/gi;

  if (inputUserValue.match(regearExUser)) {
    userText.innerHTML = "The userName valid";
    userText.style.color = "#31cc38";
  } else {
    userText.innerHTML = "The userName not valid";
    userText.style.color = "#F44336";
  }

  localStorage.setItem("userValue", JSON.stringify(inputUserValue));

  if (inputUserValue == "") {
    userText.innerHTML = "";
  }
});

inputEmail.addEventListener("keyup", () => {
  let inputEmailValue = inputEmail.value;
  let regearExEmail = /^[a-z]+(\d+)?@gmail.[a-z]{3}$/gi;

  if (inputEmailValue.match(regearExEmail)) {
    emailText.innerHTML = "The email valid";
    emailText.style.color = "#31cc38";
  } else {
    emailText.innerHTML = "The email not valid";
    emailText.style.color = "#F44336";
  }

  if (inputEmailValue == "") {
    emailText.innerHTML = "";
  }
});

inputPass.addEventListener("keyup", () => {
  let inputPassValue = inputPass.value;
  let regearExPass = /\w{8,15}/gi;

  if (inputPassValue.match(regearExPass)) {
    passText.innerHTML = "The password valid";
    passText.style.color = "#31cc38";
  } else {
    passText.innerHTML = "The password not valid";
    passText.style.color = "#F44336";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (inputEmail.value == "") {
    emailText.innerHTML = "Please enter the email";
    emailText.style.color = "#F44336";
  }

  if (inputPass.value == "") {
    passText.innerHTML = "Please enter the password";
    passText.style.color = "#F44336";
  }

  if (inputUser.value == "") {
    userText.innerHTML = "Please enter the userName";
    userText.style.color = "#F44336";
  }

  let regearExEmail = /^[a-z]+(\d+)?@gmail.[a-z]{3}$/gi;
  let inputEmailValue = inputEmail.value;

  let regearExPass = /\w{8,15}/gi;
  let inputPassValue = inputPass.value;

  let inputUserValue = inputUser.value;
  let regearExUser = /^[a-z]+\s[a-z]+/gi;

  if (
    inputEmailValue.match(regearExEmail) &&
    inputEmail.value !== "" &&
    inputPassValue.match(regearExPass) &&
    inputPass.value !== "" &&
    inputUserValue.match(regearExUser) &&
    inputUserValue.value !== ""
  ) {
    setTimeout(() => {
      location.href = "entertainment.html";
    }, 1500);
  }
});
