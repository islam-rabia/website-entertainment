function saveButtonClicked() {
  let btnProduct = document.querySelectorAll(".product-saved");
  let activeButtons = JSON.parse(localStorage.getItem("activeButtons")) || [];

  btnProduct.forEach((btn, index) => {
    const movieId = btn.closest("li").id;

    if (activeButtons.includes(movieId)) {
      btn.classList.add("active");
      btn.querySelector("ion-icon").setAttribute("name", "bookmark");
    }

    btn.addEventListener("click", () => {
      const isActive = btn.classList.toggle("active");
      const iconName = isActive ? "bookmark" : "bookmark-outline";
      btn.querySelector("ion-icon").setAttribute("name", iconName);

      if (isActive) {
        activeButtons.push(movieId);
      } else {
        activeButtons = activeButtons.filter((id) => id !== movieId);
      }
      localStorage.setItem("activeButtons", JSON.stringify(activeButtons));
    });
  });
}

export { saveButtonClicked };
