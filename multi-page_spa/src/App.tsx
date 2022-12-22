import { Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Products from "./components/Products";

const App = () => {
  return (
    <>
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
