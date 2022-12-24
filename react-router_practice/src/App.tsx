import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AllQoutes from "./Pages/AllQuotes";
import QuoteDetails from "./Pages/QuoteDetail";
// import NewQuote from "./Pages/NewQuote";
import Layout from "./components/Layout/Layout";
import NotFound from "./Pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = lazy(() => import("./Pages/NewQuote"));

const App = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQoutes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetails />
          </Route>
          <Route path="/add-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
