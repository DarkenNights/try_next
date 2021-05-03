export default function ProductInfos({ product, handleDelete }) {
  return (
    <>
      <h2>
        {product.name} <button onClick={() => handleDelete(product)}>X</button>
      </h2>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
    </>
  );
}
