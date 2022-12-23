import { useParams, Route } from "react-router-dom";

import Comments from "../components/Comments/Comments";

const QuoteDetails = () => {
  const params = useParams<{ quoteId: string }>();

  return (
    <>
      <h1>quote details page</h1>
      <p>{params.quoteId}</p>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
