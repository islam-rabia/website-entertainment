import { searchProductSeries } from "./search-product-series.js";

let wishList_container_series;
function getToLocalStorageInWishList() {
  if (localStorage.getItem("wishListSeries")) {
    wishList_container_series = JSON.parse(
      localStorage.getItem("wishListSeries") || []
    );
    generateDataSeries();
    searchProductSeries();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getToLocalStorageInWishList();
});

let appService = document.querySelector(".product-series-list");

function generateDataSeries() {
  appService.innerHTML = wishList_container_series
    .map((item, index) => {
      let { id, name, img, year, type, icon, service } = item;

      return `
        <li id="${id}" data-type="${type}">
          <div class="image">
            <img src="${img}" alt="" />
            <button class="product-saved" data-ion="${index}">
              <ion-icon name="bookmark"></ion-icon>
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

  appService.addEventListener("click", (event) => {
    let activeDiv = event.target.closest(".product-saved");

    if (activeDiv) {
      let index = activeDiv.dataset.ion;
      removeInLocalStorage(index);
    }
  });
}

function removeInLocalStorage(index) {
  wishList_container_series.splice(index, 1);
  generateDataSeries();
  localStorage.setItem(
    "wishListSeries",
    JSON.stringify(wishList_container_series)
  );

  let activeButtons = JSON.parse(localStorage.getItem("activeButtons")) || [];

  activeButtons.splice(index, 1);
  localStorage.setItem("activeButtons", JSON.stringify(activeButtons));
}

export { generateDataSeries };
