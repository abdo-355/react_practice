import { Route, Switch } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Header from "./components/Header";
import ProducDetails from "./pages/ProductDetail";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProducDetails />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
