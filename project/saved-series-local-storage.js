import { generateDataSeries } from "../components/get-data-service.js";

let wishList_container_series =
  JSON.parse(localStorage.getItem("wishListSeries")) || [];
function saveToSeriesInLocalStorage(my_data_series, index) {
  let productSeries = my_data_series[index];

  let duplicate = wishList_container_series.some(
    (item) => item.id === productSeries.id
  );

  if (!duplicate) {
    wishList_container_series.push(productSeries);
    localStorage.setItem(
      "wishListSeries",
      JSON.stringify(wishList_container_series)
    );
  } else {
    wishList_container_series = wishList_container_series.filter(
      (item) => item.id !== productSeries.id
    );
    localStorage.setItem(
      "wishListSeries",
      JSON.stringify(wishList_container_series)
    );
    generateDataSeries();
  }
}

export { saveToSeriesInLocalStorage };
