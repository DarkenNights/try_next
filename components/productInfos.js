export default function ProductInfos({ product }) {
  return (
    <>
      <h2>
        {product.name} <button>X</button>
      </h2>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
    </>
  );
}
