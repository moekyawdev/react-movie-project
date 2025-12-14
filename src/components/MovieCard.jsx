import { useMovieContext } from "../contexts/MovieContext";
function MovieCard({ movie }) {
  const { isFavourite, addToFavourites, removeFavourites } = useMovieContext();

  const favourite = isFavourite(movie.id);

  const onFavouriteClick = (e) => {
    e.preventDefault();
    if (favourite) removeFavourites(movie.id);
    else addToFavourites(movie);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          className="image"
          src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favourite-btn ${favourite ? "active" : ""}`}
            onClick={onFavouriteClick}
          >
            ❤
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-name">{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
