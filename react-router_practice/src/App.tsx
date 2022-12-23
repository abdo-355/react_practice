import { Route, Switch, Redirect } from "react-router-dom";

import AllQoutes from "./Pages/AllQuotes";
import QuoteDetails from "./Pages/QuoteDetail";
import NewQuote from "./Pages/NewQuote";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
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
      </Switch>
    </Layout>
  );
};

export default App;
