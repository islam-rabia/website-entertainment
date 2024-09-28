import "./js/generate-data.slider.js";
import "./js/slider-img.js";
import "./js/roman-data.js";
import "./js/add-active-button-click.js";

function addUserFunc() {
  if (JSON.parse(localStorage.getItem("userValue"))) {
    let userValue = JSON.parse(localStorage.getItem("userValue"));
    let addUser = document.querySelector(".form-user p");
    let message = document.querySelector(".form-user");

    message.classList.add("active");

    addUser.textContent += ` ${userValue}`;
    setTimeout(() => {
      message.classList.remove("active");
    }, 4000);
  }
}

addUserFunc();
