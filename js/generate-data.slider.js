import { saveToLocalStorageInWishList } from "./saved-local-storage.js";

let my_data;
async function generateData() {
  let result = await fetch("data/data-roman.json");
  let myData = await result.json();
  let cuing = myData.slice(0, 5);

  generateDataInSlider(cuing);
  my_data = cuing;
}

window.addEventListener("DOMContentLoaded", () => {
  generateData();
});

let app = document.querySelector(".products-list");

function generateDataInSlider(data) {
  app.innerHTML = data
    .map((item, index) => {
      let { id, name, img, year, type, icon, service } = item;

      return `
      <li class="product-slide" id="${id}">
        <div class="product">
          <div class="toggle">
            <button class="toggle-btn">
              <div class="icon-toggle">
                <i class="fa-solid fa-play"></i>
              </div>
              Play
            </button>
          </div>
          <img src="${img}" alt="" />
          <div class="product-title">
            <button class="product-saved" data-ion="${index}">
              <ion-icon name="bookmark-outline"></ion-icon>
            </button>
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
        </div>
      </li>
    `;
    })
    .join("");

  let products = document.querySelectorAll(".products-list .product-saved");

  products.forEach((item, index) => {
    item.addEventListener("click", () => {
      saveToLocalStorageInWishList(my_data, index);
    });
  });
}
