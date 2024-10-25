(function () {
  let navbarList = document.querySelectorAll(".navbar-list li a ion-icon");

  navbarList.forEach((icon) => {
    icon.addEventListener("click", () => {
      document.querySelector(".active").classList.remove("active");

      icon.classList.add("active");
    });
  });
})();
