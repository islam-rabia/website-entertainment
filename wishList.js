import "./components/get-data-movies.js";
import "./components/get-data-service.js";

function addUserFunc() {
  if (JSON.parse(localStorage.getItem("userValue"))) {
    let userValue = JSON.parse(localStorage.getItem("userValue"));
    let addUser = document.querySelector(".login p");
    let img = document.querySelector(".login img");

    addUser.innerHTML = `Welcome, ${userValue}`;
    img.setAttribute("src", "images/image-avatar.png");
  }
}

addUserFunc();

function logOutFunc() {
  let logOut = document.querySelector(".log-out");
  let img = document.querySelector(".login img");

  logOut.addEventListener("click", () => {
    localStorage.clear();
    setTimeout(() => {
      location.href = "index.html";
    }, 1500);
  });

  img.addEventListener("click", () => {
    location.href = "index.html";
  });
}

logOutFunc();
