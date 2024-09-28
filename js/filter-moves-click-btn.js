// function filterProduct() {
//   let sliderProduct = document.querySelector("#section-slider");
//   let navbarList = document.querySelectorAll("[data-id]");
//   let productMovie = document.querySelectorAll(".remand-list li");
//   let titleRemand = document.querySelector(".title-remand h3");

//   navbarList.forEach((nav) => {
//     nav.addEventListener("click", () => {
//       productMovie.forEach((item) => {
//         sliderProduct.style.display = "none";
//         if (nav.dataset.id === item.dataset.type) {
//           item.style.display = "block";
//         } else {
//           item.style.display = "none";
//         }

//         if (nav.dataset.id === "Movie") titleRemand.innerHTML = "Movies";
//         if (nav.dataset.id === "TV Series") titleRemand.innerHTML = "TV Series";
//         if (nav.dataset.id === "all")
//           titleRemand.innerHTML = "Recommended for you";

//         if (nav.dataset.id === "all") {
//           sliderProduct.style.display = "block";
//           item.style.display = "block";
//         }
//       });
//     });
//   });
// }

export { filterProduct };
