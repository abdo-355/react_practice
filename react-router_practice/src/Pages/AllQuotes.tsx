import QuoteList from "../components/Quotes/QuoteList";

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

const AllQoutes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQoutes;
