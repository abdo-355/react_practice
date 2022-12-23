import { useHistory } from "react-router-dom";

import QuoteForm from "../components/Quotes/QuoteForm";
import { IQuote } from "../types/types";

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quote: IQuote) => {
    console.log(quote);

    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} isLoading={false} />;
};

export default NewQuote;
