import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>the products page</h1>
      <ul>
        <li>
          <Link to="/products/p1">first product</Link>
        </li>
        <li>
          <Link to="/products/p2">second product</Link>
        </li>
        <li>
          <Link to="/products/p3">third product</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
