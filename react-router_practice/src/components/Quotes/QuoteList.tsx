import QuoteItem from "./QuoteItem";
import styles from "./QuoteList.module.css";
import { IQuote } from "../../types/types";

interface Quote extends IQuote {
  id: string;
}

interface Props {
  quotes: Quote[];
}

const QuoteList: React.FC<Props> = ({ quotes }) => {
  return (
    <>
      <ul className={styles.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
