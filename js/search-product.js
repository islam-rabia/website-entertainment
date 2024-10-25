function searchProduct() {
  const closeIcon = document.querySelector(".input-div ion-icon");
  const search = document.querySelector("input");
  const productText = document.querySelectorAll(".remand-list li h4");
  const productMovies = document.querySelectorAll(".remand-list li");
  const noProductsMessage = document.querySelector(".remand h5");
  const titleRandom = document.querySelector(".title-remand h3");

  search.addEventListener("keyup", () => {
    const valueInput = search.value.trim().toUpperCase();
    let foundProducts = 0;

    closeIcon.style.display = valueInput ? "block" : "none";

    productText.forEach((item, index) => {
      const isMatch = item.textContent.toUpperCase().includes(valueInput);
      productMovies[index].style.display =
        isMatch || !valueInput ? "block" : "none";

      if (isMatch) foundProducts++;
    });

    if (foundProducts > 0) {
      titleRandom.textContent = `Found ${foundProducts} results for "${search.value}"`;
      noProductsMessage.style.display = "none";
    } else {
      titleRandom.textContent = `Found ${foundProducts} results for "${search.value}"`;
      noProductsMessage.style.display = "block";
      noProductsMessage.innerHTML = `Sorry, Not Found Product 🫠`;
    }

    if (search.value == "") {
      titleRandom.textContent = "Recommended for you";
    }
  });

  closeIcon.addEventListener("click", () => {
    search.value = "";
    productMovies.forEach((movie) => (movie.style.display = "block"));
    noProductsMessage.style.display = "none";
    closeIcon.style.display = "none";
    titleRandom.textContent = "Recommended for you";
  });
}

export { searchProduct };
