import Cart from "./components/Cart";
import Layout from "./components/Layout";
import Products from "./components/Shop/Products";

const App = () => {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
};

export default App;
