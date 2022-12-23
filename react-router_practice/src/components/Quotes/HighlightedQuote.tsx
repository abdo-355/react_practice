import styles from "./HighlightedQuote.module.css";
import { IQuote } from "../../types/types";

const HighlightedQuote: React.FC<IQuote> = ({ text, author }) => {
  return (
    <figure className={styles.quote}>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
