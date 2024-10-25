import { searchProducts } from "./search-product-movies.js";

let wishList_container_movies = [];

function getToLocalStorageInWishList() {
  if (localStorage.getItem("wishListMovies")) {
    wishList_container_movies = JSON.parse(
      localStorage.getItem("wishListMovies") || []
    );
    generateDataMovies();
    searchProducts();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getToLocalStorageInWishList();
});

let appMovies = document.querySelector(".product-movies-list");

function generateDataMovies() {
  appMovies.innerHTML = wishList_container_movies
    .map((item) => {
      let { id, name, img, year, type, icon, service } = item;

      return `
        <li id="${id}" data-type="${type}">
          <div class="image">
            <img src="${img}" alt="" />
            <button class="product-saved product-saved-movies">
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

  let products = document.querySelectorAll(
    ".product-movies-list .product-saved"
  );

  products.forEach((item, index) => {
    item.addEventListener("click", () => {
      removeInLocalStorage(index);
    });
  });
}

function removeInLocalStorage(index) {
  const selectedItem = wishList_container_movies[index];
  wishList_container_movies = wishList_container_movies.filter(
    (item) => item.id !== selectedItem.id
  );
  localStorage.setItem(
    "wishListMovies",
    JSON.stringify(wishList_container_movies)
  );

  generateDataMovies();

  let activeButtons = JSON.parse(localStorage.getItem("activeButtons")) || [];
  activeButtons = activeButtons.filter((item) => {
    return +item !== selectedItem.id;
  });

  localStorage.setItem("activeButtons", JSON.stringify(activeButtons));
}

export { generateDataMovies };
