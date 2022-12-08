import { MouseEvent, ReactNode, useState } from "react";

import "./App.module.css";
import MoviesList from "./components/MoviesList";
import { IMovie } from "./types/types";

const App = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const onClickHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      setIsLoading(true);
      const response = await fetch("https://swapi.dev/api/film");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

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
      setIsLoading(false);
    } catch (err: any) {
      setError(err);
      setIsLoading(false);
    }
  };

  let content: ReactNode = <p>"No Movies found"</p>;

  if (movies.length === 0) {
    content = <p>No movies found</p>;
  }

  if (error) {
    content = <p>{error.message}</p>;
  }

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <section>
        <button onClick={onClickHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
};

export default App;
