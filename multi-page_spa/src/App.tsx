import { Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <h2>Let's get started!</h2>
    </>
  );
};

export default App;
