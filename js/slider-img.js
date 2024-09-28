const tabsBox = document.querySelector(".products-list");
let isDragging = false;

const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.scrollLeft -= e.movementX;
};

const dragStop = () => {
  isDragging = false;
};

tabsBox.addEventListener("mousedown", () => (isDragging = true));
tabsBox.addEventListener("mousemove", dragging);
tabsBox.addEventListener("mouseup", dragStop);
