function searchProducts() {
  const appMovies = document.querySelectorAll(".product-movies-list li");
  const titleMovies = document.querySelectorAll(".product-movies-list h4");
  const MoviesHeader = document.querySelector(".product-movies h3");

  const input = document.querySelector("input");
  const closeIcon = document.querySelector(".input-div ion-icon");

  input.addEventListener("keyup", () => {
    const inputValue = input.value.trim().toLowerCase();
    let foundProduct = 0;

    closeIcon.style.display = inputValue ? "block" : "none";

    titleMovies.forEach((item, index) => {
      const isMatch = item.textContent.toLowerCase().includes(inputValue);

      appMovies[index].style.display =
        isMatch || !inputValue ? "block" : "none";

      if (isMatch) foundProduct++;
    });

    if (foundProduct > 0) {
      MoviesHeader.textContent = `Found ${foundProduct} results for ${inputValue}`;
    } else {
      MoviesHeader.textContent = `Found ${foundProduct} results for ${inputValue}`;
    }

    if (input.value == "") {
      MoviesHeader.textContent = "Bookmarked Movies";
    }
  });

  closeIcon.addEventListener("click", () => {
    input.value = "";
    MoviesHeader.textContent = "Bookmarked Movies";
    appMovies.forEach((product) => (product.style.display = "block"));
  });
}

export { searchProducts };
