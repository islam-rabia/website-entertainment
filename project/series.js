import { searchSeries } from "./search-series.js";
import { saveButtonClicked } from "../js/saved-button-click.js";
import { saveToSeriesInLocalStorage } from "./saved-series-local-storage.js";

let my_data_series;
async function generateSeries() {
  let result = await fetch("data/data-roman.json");
  let myData = await result.json();

  myData = myData.filter((item) => item.type === "TV Series");
  my_data_series = myData;

  dataSeries(myData);
  searchSeries();
  saveButtonClicked();
}

window.addEventListener("DOMContentLoaded", () => {
  generateSeries();
});

let appSeries = document.querySelector(".products-series-list");

function dataSeries(data) {
  appSeries.innerHTML = data
    .map((item, index) => {
      let { id, name, img, year, type, icon, service } = item;

      return `
        <li id="${id}" data-type="${type}">
          <div class="image">
            <img src="${img}" alt="" />
            <button class="product-saved" data-ion="${index}">
              <ion-icon name="bookmark-outline"></ion-icon>
            </button>
            <div class="toggle">
              <button class="toggle-btn">
                <div class="icon-toggle">
                  <i class="fa-solid fa-play"></i>
                </div>
                Play
              </button>
            </div>
          </div>
          <div class="product-title">
            <div class="service">
              <div class="product-service">
                <p>${year}</p>
                <div class="icon">
                  <ion-icon name="${icon}"></ion-icon>
                  <span>${type}</span>
                </div>
                <p>${service}</p>
              </div>
              <h4>${name}</h4>
            </div>
          </div>
        </li>
    `;
    })
    .join("");

  appSeries.addEventListener("click", (event) => {
    let activeDiv = event.target.closest(".product-saved");

    if (activeDiv) {
      let index = activeDiv.dataset.ion;
      saveToSeriesInLocalStorage(my_data_series, index);
    }
  });
}

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
