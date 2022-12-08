import { MouseEvent, useState } from "react";

import "./App.module.css";
import MoviesList from "./components/MoviesList";
import { IMovie } from "./types/types";

const App = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const onClickHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      const response = await fetch("https://swapi.dev/api/films");

      const data = await response.json();

      const transformedData = data.results.map((movieData: any): IMovie => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });

      setMovies(transformedData);

      console.log(movies);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section>
        <button onClick={onClickHandler}>Fetch Movies</button>
      </section>
      {movies.length === 0 ? null : (
        <section>
          <MoviesList movies={movies} />
        </section>
      )}
    </>
  );
};

export default App;
