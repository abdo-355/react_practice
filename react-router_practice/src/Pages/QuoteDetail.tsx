import { useParams, Route, Link } from "react-router-dom";

import Comments from "../components/Comments/Comments";
import HighlightedQuote from "../components/Quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "author 1",
    text: "first quote",
  },
  {
    id: "q2",
    author: "author 2",
    text: "second quote",
  },
];

const QuoteDetails = () => {
  const params = useParams<{ quoteId: string }>();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quote.id}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quote.id}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
