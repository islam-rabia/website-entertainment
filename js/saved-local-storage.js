import { generateDataMovies } from "../components/get-data-movies.js";
import { generateDataSeries } from "../components/get-data-service.js";

let wishList_container_movies =
  JSON.parse(localStorage.getItem("wishListMovies")) || [];
let wishList_container_series =
  JSON.parse(localStorage.getItem("wishListSeries")) || [];

function saveToLocalStorageInWishList(my_data, index) {
  const newItem = my_data[index];

  const isDuplicateMovies = wishList_container_movies.some(
    (item) => item.id === newItem.id
  );

  const isDuplicateSeries = wishList_container_series.some(
    (item) => item.id === newItem.id
  );

  if (newItem.type === "Movie") {
    if (!isDuplicateMovies) {
      wishList_container_movies.push(newItem);
      localStorage.setItem(
        "wishListMovies",
        JSON.stringify(wishList_container_movies)
      );
    } else {
      wishList_container_movies = wishList_container_movies.filter(
        (item) => item.id !== newItem.id
      );
      localStorage.setItem(
        "wishListMovies",
        JSON.stringify(wishList_container_movies)
      );
      generateDataMovies();
    }
  }

  if (newItem.type === "TV Series") {
    if (!isDuplicateSeries) {
      wishList_container_series.push(newItem);
      localStorage.setItem(
        "wishListSeries",
        JSON.stringify(wishList_container_series)
      );
    } else {
      wishList_container_series = wishList_container_series.filter(
        (item) => item.id !== newItem.id
      );
      localStorage.setItem(
        "wishListSeries",
        JSON.stringify(wishList_container_series)
      );
      generateDataSeries();
    }
  }
}

export { saveToLocalStorageInWishList };
