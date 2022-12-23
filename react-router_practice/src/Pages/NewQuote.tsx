import QuoteForm from "../components/Quotes/QuoteForm";
import { IQuote } from "../types/types";

const NewQuote = () => {
  const addQuoteHandler = (quote: IQuote) => {
    console.log(quote);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} isLoading={false} />;
};

export default NewQuote;
