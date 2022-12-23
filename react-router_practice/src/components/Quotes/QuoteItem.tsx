import styles from "./QuoteItem.module.css";
import { IQuote } from "../../types/types";

interface Props extends IQuote {
  id: string;
}

const QuoteItem: React.FC<Props> = ({ text, author }) => {
  return (
    <li className={styles.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <a href="/" className="btn">
        View Fullscreen
      </a>
    </li>
  );
};

export default QuoteItem;
