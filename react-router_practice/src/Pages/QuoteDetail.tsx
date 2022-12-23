import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

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
  const match = useRouteMatch();
  const params = useParams<{ quoteId: string }>();
  console.log(match);
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
