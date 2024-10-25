import { searchProduct } from "./search-product.js";
import { saveButtonClicked } from "./saved-button-click.js";
import { saveToLocalStorageInWishList } from "./saved-local-storage.js";

let my_data;
async function generateRomanData() {
  let result = await fetch("data/data-roman.json");
  let myData = await result.json();
  myData.splice(0, 5);

  generateDataInRoman(myData);
  searchProduct();
  saveButtonClicked();
  my_data = myData;
}

window.addEventListener("DOMContentLoaded", () => {
  generateRomanData();
});

let app = document.querySelector(".remand-list");

function generateDataInRoman(data) {
  app.innerHTML = data
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

  let products = document.querySelectorAll(".remand-list .product-saved");

  products.forEach((item, index) => {
    item.addEventListener("click", () => {
      saveToLocalStorageInWishList(my_data, index);
    });
  });
}
