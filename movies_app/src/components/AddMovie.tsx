import { useRef, FormEventHandler } from "react";

import { IMovie } from "../types/types";

import styles from "./AddMovie.module.css";

interface Props {
  onAddMovie: (movie: IMovie) => void;
}

const AddMovie: React.FC<Props> = ({ onAddMovie }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const openingTextRef = useRef<HTMLTextAreaElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();

    // Could add validation here

    const movie = {
      title: titleRef.current!.value,
      openingText: openingTextRef.current!.value,
      releaseDate: releaseDateRef.current!.value,
    };

    onAddMovie(movie);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows={5} id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={styles.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
