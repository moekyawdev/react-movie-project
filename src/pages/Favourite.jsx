import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";

export function Favourite() {
  const { favourites } = useMovieContext();

  if (favourites.length > 0) {
    return (
      <div>
        <h3 className="text-white flex justify-center mt-5">Your Favourites</h3>
        <div className="movie-grid">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favourite-empty mt-5  flex flex-col gap-1 items-center justify-center items-center">
      <h2 className="text-white">No Favourite Movies Yet</h2>
      <p className="text-white">
        You can add your favourit movie by clicking 🤍
      </p>
    </div>
  );
}
