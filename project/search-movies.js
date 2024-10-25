function searchMovies() {
  const search = document.querySelector("input");
  const productText = document.querySelectorAll(".products-movies-list li h4");
  const productMovies = document.querySelectorAll(".products-movies-list li");
  const titleMovies = document.querySelector(".product-movies h3");
  const noProductsMessage = document.querySelector(".product-movies h5");
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
      noProductsMessage.innerHTML = `Sorry, Not Found Product 🫠`;
    }

    if (search.value == "") {
      titleMovies.textContent = "Movies";
    }
  });

  closeIcon.addEventListener("click", () => {
    search.value = "";
    noProductsMessage.style.display = "none";
    titleMovies.textContent = "Movies";
    productMovies.forEach((movie) => (movie.style.display = "block"));
    closeIcon.style.display = "none";
  });
}

export { searchMovies };
