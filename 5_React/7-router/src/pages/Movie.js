import { getMovies } from "../api/movie";
import { useState, useEffect } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const movieAPI = async () => {
    const response = await getMovies();
    setMovies(response.data);
  };

  useEffect(() => {
    movieAPI();
    console.log(movies);
  }, []);

  return (
    <>
      안녕
      <div>
        {movies.map((movie) => {
          <div key={movie.no}>
            title : {movie.title}
            genre : {movie.genre}
            actor: {movie.actor}
          </div>;
        })}
      </div>
      {/* <div key={movies.no}>
        title : {movies.title}
        genre : {movies.genre}
        actor: {movies.actor}
      </div> */}
    </>
  );
};
export default Movie;
