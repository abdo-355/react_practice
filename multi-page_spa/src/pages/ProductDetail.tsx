import { useParams } from "react-router-dom";

const ProducDetails = () => {
  const params: { productId: string } = useParams();

  console.log(params.productId);

  return (
    <section>
      <h1>Product details</h1>
      {params.productId}
    </section>
  );
};

export default ProducDetails;
