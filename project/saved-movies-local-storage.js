import { generateDataMovies } from "../components/get-data-movies.js";

let wishList_container_movies =
  JSON.parse(localStorage.getItem("wishListMovies")) || [];

function saveToMoviesInWishList(my_data, index) {
  const newItem = my_data[index];

  const isDuplicateMovies = wishList_container_movies.some(
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
}

export { saveToMoviesInWishList };
