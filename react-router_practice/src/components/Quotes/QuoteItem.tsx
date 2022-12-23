import { Link } from "react-router-dom";

import styles from "./QuoteItem.module.css";
import { IQuote } from "../../types/types";

interface Props extends IQuote {
  id: string;
}

const QuoteItem: React.FC<Props> = ({ id, text, author }) => {
  return (
    <li className={styles.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link to={`/quotes/${id}`} className="btn">
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
