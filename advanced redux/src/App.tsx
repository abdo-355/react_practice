import { useSelector } from "react-redux";

import Cart from "./components/Cart";
import Layout from "./components/Layout";
import Products from "./components/Shop/Products";
import { RootState } from "./store";

const App = () => {
  const cartIsVisible = useSelector(
    (state: RootState) => state.ui.cartIsVisible
  );

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
};

export default App;
