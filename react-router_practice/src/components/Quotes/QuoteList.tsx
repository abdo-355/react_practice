import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import styles from "./QuoteList.module.css";
import { IQuote } from "../../types/types";

interface Quote extends IQuote {
  id: string;
}

interface Props {
  quotes: Quote[];
}

const sortQuotes = (quotes: Quote[], ascending: boolean) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList: React.FC<Props> = ({ quotes }) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const isAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(quotes, isAscending);

  const changeSortingMode = () => {
    history.push("/quotes?sort=" + (isAscending ? "desc" : "asc"));
  };

  return (
    <>
      <div className={styles.sorting}>
        <button onClick={changeSortingMode}>
          Sort {isAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={styles.list}>
        {sortedQuotes.map((quote) => (
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
