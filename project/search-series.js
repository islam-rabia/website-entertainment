function searchSeries() {
  const search = document.querySelector("input");
  const productText = document.querySelectorAll(".products-series-list li h4");
  const productMovies = document.querySelectorAll(".products-series-list li");
  const titleMovies = document.querySelector(".product-series h3");
  const noProductsMessage = document.querySelector(".product-series h5");
  const closeIcon = document.querySelector(".input-div ion-icon");

  search.addEventListener("keyup", () => {
    const valueInput = search.value.trim().toLowerCase();
    let foundProducts = 0;

    closeIcon.style.display = valueInput ? "block" : "none";

    productText.forEach((item, index) => {
      const isMatch = item.textContent.toLowerCase().includes(valueInput);
      productMovies[index].style.display =
        isMatch || !valueInput ? "block" : "none";

      if (isMatch) foundProducts++;
    });

    if (foundProducts > 0) {
      titleMovies.textContent = `Found ${foundProducts} results for "${search.value}"`;
      noProductsMessage.style.display = "none";
    } else {
      titleMovies.textContent = `Found ${foundProducts} results for "${search.value}"`;
      noProductsMessage.style.display = "block";
      noProductsMessage.textContent = `Sorry, Not Found Product 🫠`;
    }

    if (search.value == "") {
      titleMovies.textContent = "TV Series";
    }
  });

  closeIcon.addEventListener("click", () => {
    titleMovies.textContent = "TV Series";
    noProductsMessage.style.display = "none";
    search.value = "";
    productMovies.forEach((item) => (item.style.display = "block"));
  });
}

export { searchSeries };
