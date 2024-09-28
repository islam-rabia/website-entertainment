function searchProductSeries() {
  const productSeries = document.querySelectorAll(".product-series-list li");
  const titleSeries = document.querySelectorAll(".product-series-list h4");
  const seriesHeader = document.querySelector(".product-series h3");

  const input = document.querySelector("input");
  const closeIcon = document.querySelector(".input-div ion-icon");

  input.addEventListener("keyup", () => {
    const inputValue = input.value.trim().toLowerCase();
    let foundProduct = 0;

    closeIcon.style.display = inputValue ? "block" : "none";

    titleSeries.forEach((item, index) => {
      const isMatch = item.textContent.toLowerCase().includes(inputValue);

      productSeries[index].style.display =
        isMatch || !inputValue ? "block" : "none";

      if (isMatch) foundProduct++;
    });

    if (foundProduct > 0) {
      seriesHeader.textContent = `Found ${foundProduct} results for ${inputValue}`;
    } else {
      seriesHeader.textContent = `Found ${foundProduct} results for ${inputValue}`;
    }

    if (input.value == "") {
      seriesHeader.textContent = "Bookmarked TV Series";
    }
  });

  closeIcon.addEventListener("click", () => {
    input.value = "";
    seriesHeader.textContent = "Bookmarked TV Series";
    productSeries.forEach((product) => (product.style.display = "block"));
  });
}

export { searchProductSeries };
