import { IMovie } from "../types/types";
import styles from "./MoviesList.module.css";
import Movie from "./Movie";

interface Props {
  movies: IMovie[];
}

const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <ul className={styles["movies-list"]}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          openingText={movie.openingText}
          releaseDate={movie.releaseDate}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
