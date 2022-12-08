import styles from "./Movie.module.css";

interface Props {
  title: string;
  releaseDate: string;
  openingText: string;
}

const Movie: React.FC<Props> = ({ title, openingText, releaseDate }) => {
  return (
    <li className={styles.movie}>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
    </li>
  );
};

export default Movie;
