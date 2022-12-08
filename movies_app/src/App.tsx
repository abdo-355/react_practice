import { ReactNode, useState, useEffect, useCallback } from "react";

import "./App.module.css";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";

import { IMovie } from "./types/types";

const App = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const onClickHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_DB}/movies.json`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedData = Object.keys(data).map(
        (movieId: string): IMovie => {
          return {
            id: movieId,
            title: data[movieId].title,
            openingText: data[movieId].openingText,
            releaseDate: data[movieId].releaseDate,
          };
        }
      );

      setMovies(transformedData);
      setIsLoading(false);
    } catch (err: any) {
      setError(err);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    onClickHandler();
  }, [onClickHandler]);

  const AddMovieHandler = async (movie: IMovie) => {
    const response = await fetch(
      `${process.env.REACT_APP_FIREBASE_DB}/movies.json`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie),
      }
    );
    const data = await response.json();
    console.log(data);
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
        <AddMovie onAddMovie={AddMovieHandler} />
      </section>
      <section>
        <button onClick={onClickHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
};

export default App;
