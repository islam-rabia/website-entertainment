let inputs = document.querySelectorAll("form input");
let paragraphs = document.querySelectorAll("form p");

inputs.forEach((input, index) => {
  input.addEventListener("click", () => {
    if (paragraphs[index]) {
      paragraphs[index].classList.add("active");
    }
  });

  input.addEventListener("blur", () => {
    if (paragraphs[index]) {
      if (input.value == "") {
        paragraphs[index].classList.remove("active");
      }
    }
  });
});
